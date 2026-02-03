'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import styles from './page.module.css';

export default function CartPage() {
    const items = useCartStore(state => state.items);
    const itemCount = useCartStore(state => state.getItemCount());

    if (items.length === 0) {
        return (
            <div className="container section-padding">
                <div className={styles.emptyCart}>
                    <h1 className="serif">Your Cart is Empty</h1>
                    <p>Looks like you haven't added any wellness essentials yet.</p>
                    <Button variant="primary" size="large">
                        <Link href="/products">Start Shopping</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container section-padding">
            <h1 className={`serif ${styles.title}`}>Your Cart ({itemCount} items)</h1>

            <div className={styles.grid}>
                <div className={styles.items}>
                    <div className={styles.header}>
                        <span>Product</span>
                        {/* Hidden on mobile */}
                        <span className={styles.desktopOnly}>Price</span>
                        <span className={styles.desktopOnly}>Quantity</span>
                        <span className={styles.desktopOnly}>Total</span>
                    </div>

                    {items.map(item => (
                        <CartItem key={item.productId} productId={item.productId} />
                    ))}
                </div>

                <div className={styles.summaryWrapper}>
                    <CartSummary />
                </div>
            </div>
        </div>
    );
}
