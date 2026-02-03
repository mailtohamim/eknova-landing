export const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validateRequired = (value: string): boolean => {
    return value.trim().length > 0;
};

export const validateMinLength = (value: string, minLength: number): boolean => {
    return value.trim().length >= minLength;
};

export const validatePostalCode = (postalCode: string): boolean => {
    // Bangladesh postal codes are 4 digits
    return /^\d{4}$/.test(postalCode);
};
