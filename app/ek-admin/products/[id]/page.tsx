import { prisma } from '@/lib/db';
import { notFound } from 'next/navigation';
import ProductForm from '@/components/admin/ProductForm';

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Check if it's a valid ID (not seed data IDs like 'h1')
    const product = await prisma.product.findUnique({
        where: { id },
    });

    if (!product) {
        notFound();
    }

    return (
        <div className="container">
            <ProductForm initialData={product} isEditing />
        </div>
    );
}
