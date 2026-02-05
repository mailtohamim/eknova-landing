import { PrismaClient } from '@prisma/client';
import { products } from '../lib/data/products';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Clear existing products
    console.log('Clearing existing products...');
    await prisma.product.deleteMany({});


    for (const p of products) {
        await prisma.product.upsert({
            where: { slug: p.slug },
            update: {
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

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
