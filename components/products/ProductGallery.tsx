'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(0);

    // Ensure we have at least one image
    const displayImages = images.length > 0 ? images : ['/placeholder.png'];

    return (
        <div className={styles.gallery}>
            <div className={styles.mainImageWrapper}>
                <Image
                    src={displayImages[selectedImage]}
                    alt={`${productName} view ${selectedImage + 1}`}
                    fill
                    className={styles.mainImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>

            {displayImages.length > 1 && (
                <div className={styles.thumbnails}>
                    {displayImages.map((img, index) => (
                        <button
                            key={index}
                            className={`${styles.thumbnailButton} ${selectedImage === index ? styles.active : ''}`}
                            onClick={() => setSelectedImage(index)}
                            aria-label={`View image ${index + 1}`}
                        >
                            <div className={styles.thumbnailWrapper}>
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    fill
                                    className={styles.thumbnailImage}
                                    sizes="80px"
                                />
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
