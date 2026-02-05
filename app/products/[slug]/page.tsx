import { notFound } from 'next/navigation';
import { prisma } from '@/lib/db';
import { formatCurrency } from '@/lib/utils/currency';
import { AccordionGroup, AccordionItem } from '@/components/ui/Accordion';
import ProductGallery from '@/components/products/ProductGallery';
import ProductInfo from '@/components/products/ProductInfo';
import NutritionTable from '@/components/products/NutritionTable';
import styles from './page.module.css';
import { Product, ProductFormat } from '@/types/product';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const productData = await prisma.product.findUnique({
        where: { slug },
    });

    if (!productData) {
        notFound();
    }

    // Cast JSON fields to expected types
    const product: Product = {
        ...productData,
        format: productData.format as ProductFormat,
        benefits: (productData.benefits as string[]) || [],
        ingredients: (productData.ingredients as string[]) || [],
        images: (Array.isArray(productData.images) && productData.images.length > 0)
            ? (productData.images as string[])
            : [productData.image],
        needs: (productData.needs as string[]) || [],
        portfolio: productData.portfolio as any,
    };

    return (
        <div className="container section-padding">
            <div className={styles.grid}>
                {/* Product Gallery */}
                <div className={styles.imageSection}>
                    <ProductGallery
                        images={product.images || [product.image]}
                        productName={product.name}
                    />
                </div>

                {/* Product Details */}
                <div className={styles.infoSection}>
                    <ProductInfo product={product} />

                    <div className={styles.accordions}>
                        <AccordionGroup>
                            <AccordionItem title="Nutrition Facts">
                                <NutritionTable />
                            </AccordionItem>

                            <AccordionItem title="Key Benefits" defaultOpen>
                                <ul className={styles.list}>
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            </AccordionItem>

                            <AccordionItem title="Directions for Use">
                                <p>{product.usage}</p>
                            </AccordionItem>

                            <AccordionItem title="Ingredients">
                                <ul className={styles.list}>
                                    {product.ingredients.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <p className={styles.allergenNote}>Free from: Gluten, lactose, egg, yeast, salt, preservatives, artificial colors and flavors.</p>
                            </AccordionItem>
                        </AccordionGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
