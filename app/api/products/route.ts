import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(products);
    } catch (error: any) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const product = await prisma.product.create({
            data: {
                ...data,
                // Ensure images, benefits, etc. are passed correctly as JSON
            }
        });
        return NextResponse.json(product);
    } catch (error: any) {
        console.error('Error creating product:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
