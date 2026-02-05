import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
    try {
        let products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' },
        });

        // Auto-seed if empty or missing new categories
        const hasNewCategories = products.some(p => {
            const needs = parseJson(p.needs);
            return needs.includes('Adaptogens') || needs.includes('Superfoods') || needs.includes('Bone & Joints');
        });

        if (products.length === 0 || !hasNewCategories) {
            console.log('Seeding/Refreshing products in DB...');
            const { products: staticProducts } = await import('@/lib/data/products');
            for (const p of staticProducts) {
                await prisma.product.upsert({
                    where: { slug: p.slug },
                    update: {
                        needs: p.needs || [],
                        portfolio: p.portfolio,
                        // Update other fields as well to ensure parity
                        name: p.name,
                        tagline: p.tagline,
                        price: p.price,
                    },
                    create: {
                        slug: p.slug,
                        name: p.name,
                        tagline: p.tagline,
                        description: p.description,
                        price: p.price,
                        rating: p.rating,
                        reviews: p.reviews,
                        image: p.image,
                        images: p.images || [],
                        benefits: p.benefits || [],
                        ingredients: p.ingredients || [],
                        usage: p.usage,
                        format: p.format,
                        needs: p.needs || [],
                        portfolio: p.portfolio,
                        isNew: p.isNew || false,
                        isBestSeller: p.isBestSeller || false,
                    },
                });
            }
            products = await prisma.product.findMany({
                orderBy: { createdAt: 'desc' },
            });
        }

        // Robust parsing for SQLite (which sometimes returns strings for Json fields)
        const parsedProducts = products.map(p => ({
            ...p,
            images: parseJson(p.images),
            benefits: parseJson(p.benefits),
            ingredients: parseJson(p.ingredients),
            needs: parseJson(p.needs),
        }));

        return NextResponse.json(parsedProducts);
    } catch (error: any) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

function parseJson(val: any) {
    if (!val) return [];
    if (Array.isArray(val)) return val;
    if (typeof val === 'string') {
        try {
            const parsed = JSON.parse(val);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    }
    return [];
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
