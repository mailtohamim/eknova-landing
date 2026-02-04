'use client';

import { useState, useEffect } from 'react';
import styles from './PromoRibbon.module.css';

const offers = [
    'FREE DELIVERY FOR AUS ORDERS OVER $59',
    '30% OFF ALL VITAMINS - LIMITED TIME ONLY',
    'NEW: WELLNESS HUB IS NOW LIVE'
];

export default function PromoRibbon() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % offers.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.ribbon}>
            <div className={`container ${styles.container}`}>
                <p className={styles.text} key={currentIndex}>
                    {offers[currentIndex]}
                </p>
            </div>
        </div>
    );
}
