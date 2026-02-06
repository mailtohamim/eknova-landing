'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { Shield, Moon, Zap, Leaf, LucideIcon } from 'lucide-react';
import styles from './CollectionCarousel.module.css';

interface Collection {
    title: string;
    subtitle: string;
    bg: string;
    color: string;
    link: string;
    Icon: LucideIcon;
}

const collections: Collection[] = [
    {
        title: 'IMMUNE SUPPORT',
        subtitle: 'HERE COMES',
        bg: '#FFD200', // Swisse Yellow
        color: '#4A3B32', // Deep Brown Text
        link: '/products?category=Immunomodulator',
        Icon: Shield
    },
    {
        title: 'GOOD SLEEP',
        subtitle: 'HERE COMES',
        bg: '#B491C8', // Lavender/Purple
        color: '#FFFFFF',
        link: '/products?category=Sleep',
        Icon: Moon
    },
    {
        title: 'DAILY ENERGY',
        subtitle: 'HERE COMES',
        bg: '#008489', // Teal
        color: '#FFFFFF',
        link: '/products?category=Energy',
        Icon: Zap
    },
    {
        title: 'GUT HEALTH',
        subtitle: 'HERE COMES',
        bg: '#E87722', // Orange
        color: '#FFFFFF',
        link: '/products?category=Gut',
        Icon: Leaf
    }
];

export default function CollectionCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false, containScroll: 'trimSnaps' });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={styles.componentWrapper}>
            <div className={styles.splitLayout}>
                {/* Left Side: Text */}
                <div className={styles.textSide}>
                    <h2 className={styles.mainHeading}>
                        From Morning Fog to Midnight Fuel
                    </h2>
                </div>

                {/* Right Side: Carousel */}
                <div className={styles.carouselSide}>
                    <div className={styles.carouselViewport} ref={emblaRef}>
                        <div className={styles.carouselContainer}>
                            {collections.map((col, idx) => (
                                <div className={styles.slide} key={idx}>
                                    <Link href={col.link} className={styles.card} style={{ backgroundColor: col.bg, color: col.color }}>
                                        <div className={styles.cardContent}>
                                            <span className={styles.cardSubtitle}>{col.subtitle}</span>
                                            <h3 className={styles.cardTitle}>{col.title}</h3>
                                        </div>
                                        <div className={styles.cardFooter}>
                                            <span className={styles.rangeName}>{col.title.split(' ')[1] || col.title}</span>
                                            <span className={styles.discoverLink}>Discover the Range</span>
                                        </div>

                                        {/* Icon Overlay */}
                                        <div className={styles.iconOverlay}>
                                            <col.Icon strokeWidth={1} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className={styles.navButtons}>
                        <button className={styles.navBtn} onClick={scrollPrev}>
                            ←
                        </button>
                        <button className={styles.navBtn} onClick={scrollNext}>
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
