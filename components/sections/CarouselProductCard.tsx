import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import styles from './CarouselProductCard.module.css';

interface CarouselProductCardProps {
    product: Product;
}

export default function CarouselProductCard({ product }: CarouselProductCardProps) {
    // Generate a random-ish review count if not present, to match the layout
    const reviewCount = product.reviews || Math.floor(Math.random() * 200) + 20;
    const rating = product.rating || 4.5;

    // Format price
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(product.price * 0.012);

    return (
        <Link href={`/products/${product.slug}`} className={styles.linkWrapper}>
            <div className={styles.flipWrapper}>
                <div className={styles.flipper}>
                    {/* Front Face: Image */}
                    <div className={styles.front}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className={styles.image}
                            />
                        </div>
                    </div>

                    {/* Back Face: Benefits */}
                    <div className={styles.back}>
                        <h4 className={styles.backTitle}>Highlights</h4>
                        <ul className={styles.benefitList}>
                            {product.benefits.slice(0, 3).map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                        <div className={styles.ingredientsPreview}>
                            <small>{product.ingredients.slice(0, 2).join(', ')}</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.info}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.tagline}>{product.tagline}</p>

                <div className={styles.footer}>
                    <div className={styles.price}>{formattedPrice}</div>
                    <div className={styles.viewBtn}>VIEW</div>
                </div>
            </div>
        </Link>
    );
}
