import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/config';
import { prisma } from '@/lib/db';
import { CartItem } from '@/types/cart';

export async function POST(request: Request) {
    try {
        const { items } = await request.json();

        // Fetch products from database to ensure price integrity
        const dbProducts = await prisma.product.findMany({
            where: {
                id: { in: items.map((item: CartItem) => item.productId) }
            }
        });

        let totalAmount = 0;
        const orderItems = items.map((item: CartItem) => {
            const product = dbProducts.find(p => p.id === item.productId);
            if (!product) throw new Error(`Product ${item.productId} not found`);

            totalAmount += product.price * item.quantity;

            return {
                productId: product.id,
                quantity: item.quantity,
                price: product.price
            };
        });

        if (totalAmount === 0) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
        }

        // Create PaymentIntent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(totalAmount * 100), // convert to smallest currency unit (paisa for BDT)
            currency: 'bdt',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        // Create a PENDING order in the database
        await prisma.order.create({
            data: {
                totalAmount: totalAmount,
                status: 'PENDING',
                paymentIntentId: paymentIntent.id,
                items: {
                    create: orderItems
                }
            }
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        console.error('Order/Payment Error:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
