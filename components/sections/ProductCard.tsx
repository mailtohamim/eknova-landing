import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import Price from '@/components/ui/Price';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from './ProductCard.module.css';
import { useCartStore } from '@/lib/store/cartStore';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card hover className={styles.productCardWrapper}>
            <Link href={`/products/${product.slug}`} className={styles.cardContent}>

                {/* 3D Flip Area - Only for Image/Highlights */}
                <div className={styles.flipArea}>
                    <div className={styles.flipper}>
                        {/* Front: Product Image */}
                        <div className={styles.front}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={400}
                                className={styles.image}
                            />
                        </div>

                        {/* Back: Highlights (Benefits/Usage) */}
                        <div className={styles.back}>
                            <div className={styles.backContent}>
                                <h4 className={styles.backTitle}>Highlights</h4>
                                <ul className={styles.benefitList}>
                                    {product.benefits.slice(0, 3).map((benefit, i) => (
                                        <li key={i}>{benefit}</li>
                                    ))}
                                </ul>
                                <div className={styles.ingredientsPreview}>
                                    <small>{product.ingredients.slice(0, 3).join(', ')}...</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Static Content Area - Does NOT Flip */}
                <div className={styles.info}>
                    <h3 className={`serif ${styles.name}`}>{product.name}</h3>
                    <p className={styles.tagline}>{product.tagline}</p>

                    <div className={styles.footer}>
                        <div className={styles.pricing}>
                            <span className={styles.price}>
                                <Price amount={product.price} />
                            </span>
                        </div>
                        <Button
                            variant="primary"
                            size="small"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                useCartStore.getState().addItem({
                                    productId: product.id,
                                    name: product.name,
                                    price: product.price,
                                    quantity: 1,
                                    image: product.image,
                                    slug: product.slug
                                });
                            }}
                        >
                            Add
                        </Button>
                    </div>
                </div>

            </Link>
        </Card>
    );
}
