import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const orders = await prisma.order.findMany({
            where: { customerEmail: email },
            include: { items: true },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(orders);
    } catch (error: any) {
        console.error('Order fetch error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
