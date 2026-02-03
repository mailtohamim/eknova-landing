import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/config';
import { products } from '@/lib/data/products';
import { CartItem } from '@/types/cart';

const calculateOrderAmount = (items: CartItem[]) => {
    return items.reduce((total, item) => {
        const product = products.find((p) => p.id === item.productId);
        // Price in products.ts is in Taka (e.g. 2499). Stripe expects paisa (x100).
        return total + (product?.price || 0) * item.quantity * 100;
    }, 0);
};

export async function POST(request: Request) {
    try {
        const { items } = await request.json();

        const amount = calculateOrderAmount(items);

        if (amount === 0) {
            return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'bdt',
            automatic_payment_methods: {
                enabled: true,
            },
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
        console.error('Payment Intent Error:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
