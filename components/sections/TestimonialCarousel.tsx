'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import styles from './TestimonialCarousel.module.css';
import { testimonials } from '@/lib/data/testimonials';

export default function TestimonialCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        loop: true,
        skipSnaps: false
    });
    const [scrollProgress, setScrollProgress] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onScroll = useCallback((emblaApi: any) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
        setScrollProgress(progress * 100);
    }, []);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onScroll(emblaApi);
        emblaApi.on('reInit', onScroll);
        emblaApi.on('scroll', onScroll);
        emblaApi.on('select', onSelect);

        return () => {
            emblaApi.off('reInit', onScroll);
            emblaApi.off('scroll', onScroll);
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onScroll, onSelect]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>TESTIMONIALS</h2>

            <div className={styles.carouselWrapper}>
                <div className={styles.viewport} ref={emblaRef}>
                    <div className={styles.container}>
                        {testimonials.map((item, index) => (
                            <div className={`${styles.slide} ${index === selectedIndex ? styles.active : ''}`} key={item.id}>
                                <div className={styles.card}>
                                    <div className={styles.stars}>
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                        ))}
                                    </div>
                                    <p className={styles.quote}>"{item.text}"</p>
                                    <div className={styles.author}>{item.author}</div>
                                    <div className={styles.product}>{item.product}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.controlsWrapper}>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.navBtn} onClick={scrollPrev} aria-label="Previous testimonial">
                            <ArrowLeft size={20} />
                        </button>
                        <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={scrollNext} aria-label="Next testimonial">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
