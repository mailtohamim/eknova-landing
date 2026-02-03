export const formatCurrency = (amount: number): string => {
    return `৳${amount.toLocaleString('en-BD')}`;
};

export const formatPrice = (amount: number): string => {
    return amount.toLocaleString('en-BD');
};
