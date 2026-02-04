'use client';

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { products, FORMATS, CATEGORIES } from '@/lib/data/products';
import { CATEGORY_IMAGES, CATEGORY_DESCRIPTIONS } from '@/lib/data/category-images';
import CategoryHero from '@/components/products/CategoryHero';
import ProductCard from '@/components/sections/ProductCard';
import FilterBar from '@/components/products/FilterBar';
import styles from './page.module.css';

// Component to handle search params logic
function ProductList() {
    const searchParams = useSearchParams();
    const router = useRouter(); // Import useRouter at top

    const category = searchParams.get('category');
    const format = searchParams.get('format');
    const query = searchParams.get('query');
    const sort = searchParams.get('sort') || 'featured';

    // Start with all products (shallow copy to avoid mutating source)
    let filteredProducts = [...products];

    let title = 'All Products';
    let heroImage = CATEGORY_IMAGES['Default'];
    let description = CATEGORY_DESCRIPTIONS['Default'];

    // 1. Category Filter
    if (category) {
        filteredProducts = filteredProducts.filter(p => p.needs.includes(category) || p.ingredients_list?.includes(category));
        title = category;
        heroImage = CATEGORY_IMAGES[category] || CATEGORY_IMAGES['Default'];
        description = CATEGORY_DESCRIPTIONS[category] || CATEGORY_DESCRIPTIONS['Default'];
    }

    // 2. Format Filter (Additive)
    if (format) {
        filteredProducts = filteredProducts.filter(p => p.format === format);
        if (title === 'All Products') {
            title = format;
            heroImage = CATEGORY_IMAGES[format] || CATEGORY_IMAGES['Default'];
        }
    }

    // 3. Special Query
    if (query === 'new') {
        filteredProducts = filteredProducts.filter(p => p.isNew);
        if (title === 'All Products') title = 'New Products';
    }

    // 4. Sorting
    if (sort === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'best-sellers') {
        // Prioritize best sellers, keep others
        filteredProducts.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    } else if (sort === 'newest') {
        filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    // Handlers
    const handleCategorySelect = (newCategory: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newCategory) {
            params.set('category', newCategory);
        } else {
            params.delete('category');
        }
        router.push(`/products?${params.toString()}`);
    };

    const handleFormatSelect = (newFormat: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newFormat) {
            params.set('format', newFormat);
        } else {
            params.delete('format');
        }
        router.push(`/products?${params.toString()}`);
    };

    const handleSortChange = (newSort: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', newSort);
        router.push(`/products?${params.toString()}`);
    };

    return (
        <>
            {/* Show dynamic hero if meaningful content */}
            {(category || format || query) && (
                <CategoryHero
                    title={title}
                    description={description}
                    image={heroImage}
                />
            )}

            <div className="container section-padding">
                {!category && !format && !query && (
                    <div className={styles.header}>
                        <h1 className="serif">{title}</h1>
                    </div>
                )}

                <FilterBar
                    categories={CATEGORIES}
                    selectedCategory={category}
                    formats={FORMATS}
                    selectedFormat={format}
                    sortOption={sort}
                    resultCount={filteredProducts.length}
                    onCategorySelect={handleCategorySelect}
                    onFormatSelect={handleFormatSelect}
                    onSortChange={handleSortChange}
                />

                {filteredProducts.length > 0 ? (
                    <div className={styles.grid}>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <p>No products found matching your criteria.</p>
                        <button
                            onClick={() => router.push('/products')}
                            style={{ textDecoration: 'underline', marginTop: '1rem', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            Clear all filters
                        </button>
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

