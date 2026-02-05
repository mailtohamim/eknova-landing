'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe/client';
import { useCartStore } from '@/lib/store/cartStore';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { formatCurrency } from '@/lib/utils/currency';
import Button from '@/components/ui/Button';

export default function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState('');
    const items = useCartStore(state => state.items);
    const getTotal = useCartStore(state => state.getTotal);

    useEffect(() => {
        if (items.length > 0) {
            fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret))
                .catch(err => console.error("Error creating payment intent:", err));
        }
    }, [items]);

    const appearance = {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#800000', // Maroon
            colorBackground: '#ffffff',
            colorText: '#171717',
            fontFamily: 'Inter, system-ui, sans-serif',
            borderRadius: '8px',
        },
    };

    const options = {
        clientSecret,
        appearance,
    };

    if (items.length === 0) {
        return (
            <div className={styles.checkoutContainer}>
                <div className={styles.emptyState}>
                    <h1 className="serif">Your cart is empty</h1>
                    <p>Add some botanical wellness essentials to your cart to proceed with checkout.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <Button variant="primary">
                            <Link href="/products">Shop Products</Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.breadcrumb}>
                <Link href="/cart">Cart</Link> / <span>Checkout</span>
            </div>

            <div className={styles.checkoutGrid}>
                {/* Left: Payment Form */}
                <div className={styles.checkoutFormCard}>
                    {clientSecret ? (
                        <Elements options={options} stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    ) : (
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <p>Initializing secure checkout...</p>
                        </div>
                    )}
                </div>

                {/* Right: Order Summary */}
                <div className={styles.orderSummaryCard}>
                    <h2 className={`serif ${styles.summaryTitle}`}>Order Summary</h2>
                    <div className={styles.itemList}>
                        {items.map((item) => (
                            <div key={item.productId} className={styles.item}>
                                <div className={styles.itemImage}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={styles.itemInfo}>
                                    <span className={styles.itemName}>{item.name}</span>
                                    <span className={styles.itemQty}>Qty: {item.quantity}</span>
                                </div>
                                <div className={styles.itemPrice}>
                                    {formatCurrency(item.price * item.quantity)}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                        <div className={styles.totalRow}>
                            <span>Total</span>
                            <span>{formatCurrency(getTotal())}</span>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '1rem' }}>
                            Secure encrypted payment. All major credit cards accepted.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
