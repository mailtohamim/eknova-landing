'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useCartStore } from '@/lib/store/cartStore';
import { Product } from '@/types/product';
import Button from '@/components/ui/Button';
import styles from './AddToCartButton.module.css';

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore(state => state.addItem);

    const handleAddToCart = () => {
        addItem({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity,
            image: product.images?.[0] || product.image,
            slug: product.slug
        });

        toast.success(`Added ${product.name} to cart`);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(q => q - 1);
    };

    const increaseQuantity = () => {
        setQuantity(q => q + 1);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.quantitySelector}>
                <button onClick={decreaseQuantity} className={styles.qtyBtn}>−</button>
                <span className={styles.qtyValue}>{quantity}</span>
                <button onClick={increaseQuantity} className={styles.qtyBtn}>+</button>
            </div>

            <Button
                variant="primary"
                onClick={handleAddToCart}
                disabled={false}
                className={styles.addBtn}
            >
                Add to Cart
            </Button>
        </div>
    );
}
