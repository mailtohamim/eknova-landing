'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselProductCard from './CarouselProductCard';
import { Product } from '@/types/product';
import styles from './ProductCarousel.module.css';

interface ProductCarouselProps {
    products: Product[];
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1
    });
    // ... keep existing state ...
    const [scrollProgress, setScrollProgress] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onScroll = useCallback((emblaApi: any) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onScroll(emblaApi);
        emblaApi.on('reInit', onScroll);
        emblaApi.on('scroll', onScroll);

        return () => {
            emblaApi.off('reInit', onScroll);
            emblaApi.off('scroll', onScroll);
        };
    }, [emblaApi, onScroll]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {products.map((product, index) => {
                        return (
                            <div className={styles.slide} key={product.id}>
                                <CarouselProductCard product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.controls}>
                <div className={styles.progressBarContainer}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>

                <div className={styles.buttons}>
                    <button
                        className={styles.navButton}
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        aria-label="Previous slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        className={styles.navButton}
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        aria-label="Next slide"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
