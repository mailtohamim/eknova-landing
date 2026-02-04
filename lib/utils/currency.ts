export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    }).format(amount * 0.012);
};

export const formatPrice = (amount: number): string => {
    return formatCurrency(amount);
};
