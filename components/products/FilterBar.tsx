'use client';

import React from 'react';
import styles from './FilterBar.module.css';

interface FilterBarProps {
    formats: string[];
    selectedFormat: string | null;
    sortOption: string;
    resultCount: number;
    onFormatSelect: (format: string | null) => void;
    onSortChange: (sort: string) => void;
}

export default function FilterBar({
    formats,
    selectedFormat,
    sortOption,
    resultCount,
    onFormatSelect,
    onSortChange
}: FilterBarProps) {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.topRow}>
                <div className={styles.resultCount}>
                    {resultCount} Result{resultCount !== 1 ? 's' : ''}
                </div>

                <div className={styles.sortGroup}>
                    <span className={styles.label}>Sort by:</span>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.select}
                            value={sortOption}
                            onChange={(e) => onSortChange(e.target.value)}
                        >
                            <option value="featured">Featured</option>
                            <option value="best-sellers">Best Sellers</option>
                            <option value="newest">Newest</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                        <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className={styles.chipsContainer}>
                <button
                    className={`${styles.chip} ${!selectedFormat ? styles.chipActive : ''}`}
                    onClick={() => onFormatSelect(null)}
                >
                    All Types
                </button>
                {formats.map(format => (
                    <button
                        key={format}
                        className={`${styles.chip} ${selectedFormat === format ? styles.chipActive : ''}`}
                        onClick={() => onFormatSelect(format)}
                    >
                        {format}
                    </button>
                ))}
            </div>
        </div>
    );
}
