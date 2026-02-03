'use client';

import { notFound } from 'next/navigation';
import { products } from '@/lib/data/products';
import { formatCurrency } from '@/lib/utils/currency';
import AddToCartButton from '@/components/cart/AddToCartButton';
import { AccordionGroup, AccordionItem } from '@/components/ui/Accordion';
import ProductGallery from '@/components/products/ProductGallery';
import styles from './page.module.css';

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

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
                    <div className={styles.header}>
                        <span className={styles.tagline}>{product.tagline}</span>
                        <h1 className={`serif ${styles.title}`}>{product.name}</h1>
                        <div className={styles.priceRow}>
                            <span className={styles.price}>{formatCurrency(product.price)}</span>
                            <div className={styles.rating}>
                                {'★'.repeat(Math.round(product.rating))}
                                <span className={styles.count}>({product.reviews} reviews)</span>
                            </div>
                        </div>
                        <p className={styles.description}>{product.description}</p>
                    </div>

                    <div className={styles.actions}>
                        <AddToCartButton product={product} />
                    </div>

                    <div className={styles.accordions}>
                        <AccordionGroup>
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

                            <AccordionItem title="Categories">
                                <div className={styles.tags}>
                                    <span className={styles.tagLabel}>Needs: </span>
                                    {product.needs.map((need, i) => (
                                        <span key={need}>{need}{i < product.needs.length - 1 ? ', ' : ''}</span>
                                    ))}
                                </div>
                                <div className={styles.tags} style={{ marginTop: '0.5rem' }}>
                                    <span className={styles.tagLabel}>Format: </span>
                                    <span>{product.format}</span>
                                </div>
                            </AccordionItem>
                        </AccordionGroup>
                    </div>
                </div>
            </div>
        </div>
    );
}
