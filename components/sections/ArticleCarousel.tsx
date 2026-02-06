'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './ArticleCarousel.module.css';
import { articles } from '@/lib/data/articles';

export default function ArticleCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: false,
        skipSnaps: false,
        dragFree: true
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.headingWrapper}>
                <div>
                    <h2>Wellness Hub</h2>
                    <p>Expert advice and inspiration for your health journey</p>
                </div>
                <div className={styles.controls}>
                    <button className={styles.controlBtn} onClick={scrollPrev} aria-label="Previous articles">
                        <ArrowLeft size={20} />
                    </button>
                    <button className={styles.controlBtn} onClick={scrollNext} aria-label="Next articles">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {articles.map((article) => (
                        <div className={styles.slide} key={article.id}>
                            <Link href={`/articles/${article.slug}`} className={styles.articleCard}>
                                <div className={styles.imageWrapper}>
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.tag}>{article.tag}</span>
                                    <h3 className={styles.title}>{article.title}</h3>
                                    <p className={styles.excerpt}>{article.excerpt}</p>

                                    <div className={styles.meta}>
                                        <span>{article.readTime}</span>
                                        <span>•</span>
                                        <span>{article.date}</span>
                                    </div>

                                    <span className={styles.readMore}>Read Article</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
