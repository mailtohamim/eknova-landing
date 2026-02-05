'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store/cartStore';
import Button from '@/components/ui/Button';
import styles from './SuccessPage.module.css';

function SuccessContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const clearCart = useCartStore(state => state.clearCart);
    const [status, setStatus] = useState('processing');
    const [orderId, setOrderId] = useState<string | null>(null);

    const paymentIntentId = searchParams.get('payment_intent');

    useEffect(() => {
        if (paymentIntentId) {
            // Confirm payment status with our server
            fetch('/api/orders/confirm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paymentIntentId }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setStatus('succeeded');
                        setOrderId(data.orderId);
                        clearCart();
                    } else {
                        setStatus('failed');
                    }
                })
                .catch(err => {
                    console.error('Confirmation error:', err);
                    setStatus('error');
                });
        }
    }, [paymentIntentId, clearCart]);

    return (
        <div className="container section-padding">
            <div className={styles.successCard}>
                {status === 'succeeded' ? (
                    <>
                        <div className={styles.icon}>✓</div>
                        <h1 className="serif">Thank you for your order!</h1>
                        <p>Your payment was successful and your order is being processed.</p>
                        {orderId && <p className={styles.orderNumber}>Order Number: #{orderId.slice(-8)}</p>}
                        <div className={styles.actions}>
                            <Button variant="primary" onClick={() => router.push('/products')}>
                                Continue Shopping
                            </Button>
                            <Button variant="secondary" onClick={() => router.push('/profile')}>
                                View Order History
                            </Button>
                        </div>
                    </>
                ) : status === 'processing' ? (
                    <>
                        <h1 className="serif">Confirming your payment...</h1>
                        <p>Please wait a moment while we verify your transaction.</p>
                    </>
                ) : (
                    <>
                        <div className={`${styles.icon} ${styles.error}`}>!</div>
                        <h1 className="serif">Something went wrong</h1>
                        <p>We couldn't verify your payment. If you believe this is an error, please contact support.</p>
                        <Button variant="primary" onClick={() => router.push('/checkout')}>
                            Return to Checkout
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={<div>Loading success page...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
