'use client';

import { useState, useEffect } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
    LinkAuthenticationElement,
    AddressElement
} from '@stripe/react-stripe-js';
import { useCartStore } from '@/lib/store/cartStore';
import { formatCurrency } from '@/lib/utils/currency';
import Button from '@/components/ui/Button';
import styles from './CheckoutForm.module.css';

export default function CheckoutForm() {
    const stripe = useStripe();
    const items = useCartStore(state => state.items);
    const elements = useElements();
    const getTotal = useCartStore(state => state.getTotal);
    const clearCart = useCartStore(state => state.clearCart);

    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/checkout/success`,
                receipt_email: email,
            },
            // redirect: 'if_required' as any, // TypeScript might complain, simplified for now
        });

        if (error) {
            if (error.type === 'card_error' || error.type === 'validation_error') {
                setMessage(error.message || 'An unexpected error occurred.');
            } else {
                setMessage('An unexpected error occurred.');
            }
        } else {
            // Successful payment
            clearCart();
            // Note: Redirect usually happens automatically with Stripe, 
            // but if using logic here, we'd handle success state.
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit} className={styles.form}>
            <h2 className="serif">Checkout</h2>

            <div className={styles.section}>
                <h3>Contact Information</h3>
                <LinkAuthenticationElement
                    id="link-authentication-element"
                    onChange={(e: any) => setEmail(e.value.email)}
                />
            </div>

            <div className={styles.section}>
                <h3>Shipping Address</h3>
                <AddressElement options={{ mode: 'shipping', allowedCountries: ['BD', 'US', 'GB', 'AU', 'CA'] }} />
            </div>

            <div className={styles.section}>
                <h3>Payment</h3>
                <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
            </div>

            {message && <div id="payment-message" className={styles.errorMessage}>{message}</div>}

            <div className={styles.totalSection}>
                <span>Total to Pay:</span>
                <span className={styles.totalAmount}>{formatCurrency(getTotal())}</span>
            </div>

            <Button
                disabled={isLoading || !stripe || !elements}
                id="submit"
                fullWidth
                size="large"
            >
                {isLoading ? 'Processing...' : 'Pay Now'}
            </Button>
        </form>
    );
}
