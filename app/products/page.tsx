'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/data/products';
import { CATEGORY_IMAGES, CATEGORY_DESCRIPTIONS } from '@/lib/data/category-images';
import CategoryHero from '@/components/products/CategoryHero';
import ProductCard from '@/components/sections/ProductCard';
import styles from './page.module.css';

// Component to handle search params logic
function ProductList() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const format = searchParams.get('format');
    const query = searchParams.get('query');

    let filteredProducts = products;
    let title = 'All Products';
    let heroImage = CATEGORY_IMAGES['Default'];
    let description = CATEGORY_DESCRIPTIONS['Default'];

    if (category) {
        filteredProducts = products.filter(p => p.needs.includes(category) || p.ingredients_list?.includes(category));
        title = category;
        heroImage = CATEGORY_IMAGES[category] || CATEGORY_IMAGES['Default'];
        description = CATEGORY_DESCRIPTIONS[category] || CATEGORY_DESCRIPTIONS['Default'];
    } else if (format) {
        filteredProducts = products.filter(p => p.format === format);
        title = `${format}`;
        heroImage = CATEGORY_IMAGES[format] || CATEGORY_IMAGES['Default'];
    } else if (query === 'new') {
        filteredProducts = products.filter(p => p.isNew);
        title = 'New Products';
    } else if (searchParams.get('sort') === 'best-sellers') {
        filteredProducts = products.filter(p => p.isBestSeller);
        title = 'Best Sellers';
    }

    return (
        <>
            {/* Show dynamic hero if we have filtered by something meaningful */}
            {(category || format) && (
                <CategoryHero
                    title={title}
                    description={description}
                    image={heroImage}
                />
            )}

            <div className="container section-padding">
                {!category && !format && (
                    <div className={styles.header}>
                        <h1 className="serif">{title}</h1>
                        <p>{filteredProducts.length} Result{filteredProducts.length !== 1 ? 's' : ''}</p>
                    </div>
                )}

                {filteredProducts.length > 0 ? (
                    <div className={styles.grid}>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <p>No products found for this category.</p>
                    </div>
                )}
            </div>
        </>
    );
}

// Main page component wrapped in Suspense for useSearchParams
export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="container section-padding">Loading products...</div>}>
            <ProductList />
        </Suspense>
    );
}

