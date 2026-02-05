import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe/config';
import { prisma } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const { paymentIntentId } = await request.json();

        if (!paymentIntentId) {
            return NextResponse.json({ error: 'Payment Intent ID is required' }, { status: 400 });
        }

        // Retrieve payment intent from Stripe to verify status
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status === 'succeeded') {
            // Find the order in our database
            const order = await prisma.order.findUnique({
                where: { paymentIntentId },
            });

            if (!order) {
                return NextResponse.json({ error: 'Order not found' }, { status: 404 });
            }

            // Update order status and capture email if available
            const updatedOrder = await prisma.order.update({
                where: { id: order.id },
                data: {
                    status: 'PAID',
                    customerEmail: paymentIntent.receipt_email || order.customerEmail,
                },
            });

            return NextResponse.json({
                success: true,
                orderId: updatedOrder.id,
                status: updatedOrder.status
            });
        } else {
            return NextResponse.json({
                success: false,
                status: paymentIntent.status
            });
        }
    } catch (error: any) {
        console.error('Order confirmation error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
