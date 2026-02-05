"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const initialImage = images && images.length > 0 ? images[0] : '/images/products/placeholder.png';
    const [mainImage, setMainImage] = useState(initialImage);

    // Create mock images if only one provided, just for UI demo
    const galleryImages = images && images.length > 0
        ? (images.length > 1 ? images : [images[0], images[0], images[0], images[0]])
        : ['/images/products/placeholder.png']; // Safety fallback

    return (
        <div className={styles.galleryWrapper}>
            <div className={styles.thumbnails}>
                {galleryImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`${styles.thumbItem} ${mainImage === img && idx === 0 ? styles.active : ''}`}
                        /* Simple mock active logic, ideally based on index if images can be duplicates */
                        onClick={() => setMainImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`${productName} thumbnail ${idx + 1}`}
                            width={80}
                            height={80}
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
            <div className={styles.mainImage}>
                <Image
                    src={mainImage}
                    alt={productName}
                    width={600}
                    height={600}
                    objectFit="contain"
                    className={styles.image}
                />
            </div>
        </div>
    );
}
