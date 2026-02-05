import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');

        if (!query) {
            return NextResponse.json([]);
        }

        const products = await prisma.product.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { description: { contains: query } },
                    { tagline: { contains: query } },
                ],
            },
        });

        return NextResponse.json(products);
    } catch (error: any) {
        console.error('Search error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
