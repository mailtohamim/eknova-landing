import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/lib/store/cartStore';
import { formatCurrency } from '@/lib/utils/currency';
import styles from './CartItem.module.css';

interface CartItemProps {
    productId: string;
}

export default function CartItem({ productId }: CartItemProps) {
    const item = useCartStore(state => state.items.find(i => i.productId === productId));
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const removeItem = useCartStore(state => state.removeItem);

    if (!item) return null;

    return (
        <div className={styles.cartItem}>
            <div className={styles.imageWrapper}>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <Link href={`/products/${item.slug}`} className={styles.name}>
                    {item.name}
                </Link>
                <p className={styles.price}>{formatCurrency(item.price)}</p>

                <div className={styles.controls}>
                    <div className={styles.quantity}>
                        <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className={styles.quantityBtn}
                            aria-label="Decrease quantity"
                        >
                            −
                        </button>
                        <span className={styles.quantityValue}>{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className={styles.quantityBtn}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>

                    <button
                        onClick={() => removeItem(item.productId)}
                        className={styles.removeBtn}
                        aria-label="Remove item"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}
