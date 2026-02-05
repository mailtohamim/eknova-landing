'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/sections/ProductCard';
import styles from './SearchPage.module.css';
import { Product } from '@/types/product';

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const [results, setResults] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (query) {
            setIsLoading(true);
            fetch(`/api/search?q=${encodeURIComponent(query)}`)
                .then(res => res.json())
                .then(data => {
                    setResults(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error('Search error:', err);
                    setIsLoading(false);
                });
        } else {
            setResults([]);
            setIsLoading(false);
        }
    }, [query]);

    if (isLoading) {
        return (
            <div className="container section-padding">
                <h1 className="serif">Searching for "{query}"...</h1>
                <div className={styles.loader}>Loading...</div>
            </div>
        );
    }

    return (
        <div className="container section-padding">
            <h1 className="serif">
                {results.length > 0
                    ? `Results for "${query}" (${results.length})`
                    : `No results found for "${query}"`}
            </h1>

            <div className={styles.grid}>
                {results.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading search...</div>}>
            <SearchResults />
        </Suspense>
    );
}
