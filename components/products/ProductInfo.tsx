"use client";

import React, { useState } from 'react';
import styles from './ProductInfo.module.css';
import { Product } from '@/types/product';
import Button from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils/currency';
import { useCartStore } from '@/lib/store/cartStore';

interface ProductInfoProps {
    product: Product;
}

const SIZES = [30, 60, 90, 120, 200];

export default function ProductInfo({ product }: ProductInfoProps) {
    const [selectedSize, setSelectedSize] = useState(SIZES[1]); // Default 60
    const [quantity, setQuantity] = useState(1);

    // Mock price calculation logic based on size
    // Base price is usually for the standard size (say 60 caps)
    // We'll define base size as 60.
    const baseSize = 60;
    const pricePerUnit = product.price / baseSize;
    const currentPrice = pricePerUnit * selectedSize * quantity;

    // Discount logic for larger sizes
    let discount = 0;
    if (selectedSize >= 90) discount = 0.10; // 10% off
    if (selectedSize >= 200) discount = 0.20; // 20% off

    const finalPrice = currentPrice * (1 - discount);

    const handleQuantityChange = (delta: number) => {
        setQuantity(prev => Math.max(1, prev + delta));
    };

    return (
        <div className={styles.infoWrapper}>
            <div className={styles.header}>
                <span className={styles.tagline}>{product.tagline}</span>
                <h1 className={`serif ${styles.title}`}>{product.name}</h1>

                <div className={styles.ratingRow}>
                    <div className={styles.stars}>
                        {'★'.repeat(Math.round(product.rating || 5))}
                        {'☆'.repeat(5 - Math.round(product.rating || 5))}
                    </div>
                    <span className={styles.reviewCount}>({product.reviews || 0} reviews)</span>
                </div>

                <div className={styles.priceRow}>
                    <span className={styles.price}>{formatCurrency(finalPrice)}</span>
                    {discount > 0 && (
                        <span className={styles.originalPrice}>{formatCurrency(currentPrice)}</span>
                    )}
                </div>
            </div>

            <div className={styles.selectorSection}>
                <label className={styles.label}>Select Size (Capsules)</label>
                <div className={styles.sizeGrid}>
                    {SIZES.map(size => (
                        <button
                            key={size}
                            className={`${styles.sizeOption} ${selectedSize === size ? styles.selected : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                {discount > 0 && <p className={styles.discountNote}>Save {discount * 100}% with this size!</p>}
            </div>

            <div className={styles.actions}>
                <div className={styles.quantityControl}>
                    <button onClick={() => handleQuantityChange(-1)}>−</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
                <Button
                    variant="primary"
                    size="large"
                    className={styles.addToCartBtn}
                    onClick={() => {
                        useCartStore.getState().addItem({
                            productId: product.id,
                            name: product.name,
                            price: finalPrice / quantity, // Price per single unit with discount
                            quantity: quantity,
                            image: product.image,
                            slug: product.slug,
                            selectedSize: selectedSize
                        });
                    }}
                >
                    Add to Cart - {formatCurrency(finalPrice)}
                </Button>
            </div>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.meta}>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Free Shipping</span>
                    <span>On orders over $50</span>
                </div>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Format</span>
                    <span>{product.format}</span>
                </div>
            </div>
        </div>
    );
}
