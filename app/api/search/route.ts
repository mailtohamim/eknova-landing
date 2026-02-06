import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');

        if (!query) {
            return NextResponse.json([]);
        }

        let products: any[] = [];
        try {
            products = await prisma.product.findMany({
                where: {
                    OR: [
                        { name: { contains: query } },
                        { description: { contains: query } },
                        { tagline: { contains: query } },
                    ],
                },
            });
        } catch (error) {
            console.warn('Database search failed, falling back to static data');
        }

        // Static fallback if DB is empty or failed
        if (!products || products.length === 0) {
            const { products: staticProducts } = await import('@/lib/data/products-new');
            const lowerQuery = query.toLowerCase();
            products = staticProducts.filter(p =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.description.toLowerCase().includes(lowerQuery) ||
                (p.tagline && p.tagline.toLowerCase().includes(lowerQuery)) ||
                (p.benefits && p.benefits.some(b => b.toLowerCase().includes(lowerQuery)))
            ) as any;
        }

        return NextResponse.json(products);
    } catch (error: any) {
        console.error('Search error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
