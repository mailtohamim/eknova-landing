export interface OrderItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface ShippingAddress {
    fullName: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    postalCode: string;
    country: string;
}

export interface Order {
    id: string;
    orderNumber: string;
    userId?: string;
    email: string;
    items: OrderItem[];
    shippingAddress: ShippingAddress;
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
    status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
    paymentIntentId: string;
    createdAt: string;
    updatedAt: string;
}
