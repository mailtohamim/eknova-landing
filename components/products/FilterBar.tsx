import React from 'react';
import styles from './FilterBar.module.css';
import FilterDropdown from './FilterDropdown';

interface FilterBarProps {
    categories: string[];
    selectedCategory: string | null;
    formats: string[];
    selectedFormat: string | null;
    sortOption: string;
    resultCount: number;
    onCategorySelect: (category: string | null) => void;
    onFormatSelect: (format: string | null) => void;
    onSortChange: (sort: string) => void;
}

const SORT_OPTIONS = [
    { label: 'Featured', value: 'featured' },
    { label: 'Best Sellers', value: 'best-sellers' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
];

export default function FilterBar({
    categories,
    selectedCategory,
    formats,
    selectedFormat,
    sortOption,
    resultCount,
    onCategorySelect,
    onFormatSelect,
    onSortChange
}: FilterBarProps) {
    const categoryOptions = categories.map(c => ({ label: c, value: c }));
    const formatOptions = formats.map(f => ({ label: f, value: f }));

    return (
        <div className={styles.filterContainer}>
            <div className={styles.controlsRow}>
                <FilterDropdown
                    label="Health Goal"
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={onCategorySelect}
                    placeholder="All Needs"
                />

                <FilterDropdown
                    label="Format"
                    options={formatOptions}
                    value={selectedFormat}
                    onChange={onFormatSelect}
                    placeholder="All Types"
                />

                <FilterDropdown
                    label="Sort By"
                    options={SORT_OPTIONS}
                    value={sortOption}
                    onChange={(val) => onSortChange(val || 'featured')}
                />
            </div>

            <div className={styles.resultsRow}>
                <span className={styles.countText}>
                    Showing {resultCount} product{resultCount !== 1 ? 's' : ''}
                </span>
            </div>
        </div>
    );
}
