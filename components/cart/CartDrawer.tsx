'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCartStore } from '@/lib/store/cartStore';
import { formatCurrency } from '@/lib/utils/currency';
import Button from '@/components/ui/Button';
import CartItem from '@/components/cart/CartItem';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
    const isOpen = useCartStore(state => state.isOpen);
    const closeCart = useCartStore(state => state.closeCart);
    const items = useCartStore(state => state.items);
    const getTotal = useCartStore(state => state.getTotal);

    // Prevent body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.backdrop} onClick={closeCart} />

            <div className={styles.drawer}>
                <div className={styles.header}>
                    <h2 className="serif">Your Cart</h2>
                    <button onClick={closeCart} className={styles.closeBtn}>×</button>
                </div>

                <div className={styles.content}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Your cart is empty</p>
                            <Button variant="secondary" onClick={closeCart}>
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className={styles.items}>
                            {items.map(item => (
                                <CartItem key={item.productId} productId={item.productId} />
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>Subtotal</span>
                            <span>{formatCurrency(getTotal())}</span>
                        </div>
                        <p className={styles.shippingNote}>Shipping calculated at checkout</p>

                        <div className={styles.actions}>
                            <Button variant="primary" fullWidth size="large" onClick={closeCart}>
                                <Link href="/checkout" style={{ display: 'block', width: '100%' }}>Checkout</Link>
                            </Button>
                            <Button variant="ghost" fullWidth onClick={closeCart}>
                                <Link href="/cart" style={{ display: 'block', width: '100%' }}>View Cart</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
