'use client';

import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe/client';
import { useCartStore } from '@/lib/store/cartStore';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import styles from './page.module.css';

export default function CheckoutPage() {
    const [clientSecret, setClientSecret] = useState('');
    const items = useCartStore(state => state.items);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (items.length > 0) {
            fetch('/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [items]);

    const appearance = {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#0a0a0a',
            colorBackground: '#ffffff',
            colorText: '#171717',
            fontFamily: 'Inter, system-ui, sans-serif',
        },
    };

    const options = {
        clientSecret,
        appearance,
    };

    if (items.length === 0) {
        return (
            <div className="container section-padding">
                <h1 className="serif">Your cart is empty</h1>
            </div>
        );
    }

    return (
        <div className="container section-padding">
            <div className={styles.checkoutWrapper}>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </div>
    );
}
