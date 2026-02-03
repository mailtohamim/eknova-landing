import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartStore } from '@/types/cart';

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (item: CartItem) => {
                const items = get().items;
                const existingItem = items.find(i => i.productId === item.productId);

                if (existingItem) {
                    set({
                        items: items.map(i =>
                            i.productId === item.productId
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        ),
                        isOpen: true, // Auto-open cart
                    });
                } else {
                    set({ items: [...items, item], isOpen: true }); // Auto-open cart
                }
            },

            removeItem: (productId: string) => {
                set({ items: get().items.filter(i => i.productId !== productId) });
            },

            updateQuantity: (productId: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                set({
                    items: get().items.map(i =>
                        i.productId === productId ? { ...i, quantity } : i
                    ),
                });
            },

            clearCart: () => {
                set({ items: [] });
            },

            getTotal: () => {
                return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
            },

            getItemCount: () => {
                return get().items.reduce((count, item) => count + item.quantity, 0);
            },

            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
        }),
        {
            name: 'eknova-cart',
            partialize: (state) => ({ items: state.items }), // Don't persist UI state
        }
    )
);
