'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';
import { formatCurrency } from '@/lib/utils/currency';
import Button from '@/components/ui/Button';
import styles from './CartSummary.module.css';

export default function CartSummary() {
    const items = useCartStore(state => state.items);
    const getTotal = useCartStore(state => state.getTotal);

    const subtotal = getTotal();
    const shipping = 0; // Free shipping for now
    const tax = subtotal * 0.05; // 5% tax example
    const total = subtotal + shipping + tax;

    if (items.length === 0) return null;

    return (
        <div className={styles.summary}>
            <h3 className="serif">Order Summary</h3>

            <div className={styles.rows}>
                <div className={styles.row}>
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className={styles.row}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
                </div>
                <div className={styles.row}>
                    <span>Tax (5%)</span>
                    <span>{formatCurrency(tax)}</span>
                </div>
                <div className={`${styles.row} ${styles.total}`}>
                    <span>Total</span>
                    <span>{formatCurrency(total)}</span>
                </div>
            </div>

            <div className={styles.actions}>
                <Button variant="primary" fullWidth size="large">
                    <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
            </div>
        </div>
    );
}
