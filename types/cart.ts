export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    slug: string;
}

export interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: CartItem) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getItemCount: () => number;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
}
