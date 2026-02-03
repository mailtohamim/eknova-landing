'use client';

import { useCurrencyStore } from '@/lib/store/currencyStore';

interface PriceProps {
    amount: number; // Base amount in BDT
    className?: string;
}

export default function Price({ amount, className = '' }: PriceProps) {
    const { currency, exchangeRate } = useCurrencyStore();

    const convertedAmount = amount * exchangeRate;

    // Format options
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(convertedAmount);

    return (
        <span className={className}>
            {formattedPrice}
        </span>
    );
}
