import { create } from 'zustand';

type Currency = 'USD' | 'EUR';

interface CurrencyState {
    currency: Currency;
    exchangeRate: number; // Rate from BDT to Currency
    toggleCurrency: () => void;
}

const RATES: Record<Currency, number> = {
    // 1 USD = 110 BDT (approx) -> 1 BDT = 0.00909 USD
    // 1 EUR = 120 BDT (approx) -> 1 BDT = 0.00833 EUR
    'USD': 0.00909,
    'EUR': 0.00833,
};

export const useCurrencyStore = create<CurrencyState>((set) => ({
    currency: 'USD',
    exchangeRate: RATES['USD'],
    toggleCurrency: () => set((state) => {
        const newCurrency = state.currency === 'USD' ? 'EUR' : 'USD';
        return {
            currency: newCurrency,
            exchangeRate: RATES[newCurrency]
        };
    }),
}));
