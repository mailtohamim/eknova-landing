'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FORMATS, CATEGORIES } from '@/lib/data/products';
import { CATEGORY_IMAGES, CATEGORY_DESCRIPTIONS } from '@/lib/data/category-images';
import CategoryHero from '@/components/products/CategoryHero';
import ProductCard from '@/components/sections/ProductCard';
import FilterBar from '@/components/products/FilterBar';
import styles from './page.module.css';
import { Product } from '@/types/product';

// Component to handle search params logic
function ProductList() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const category = searchParams.get('category')?.trim() || null;
    const format = searchParams.get('format')?.trim() || null;
    const query = searchParams.get('query')?.trim() || null;
    const sort = searchParams.get('sort') || 'featured';

    useEffect(() => {
        setIsLoading(true);
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    // Sanitize data to ensure arrays exist
                    const sanitized = data.map((p: any) => ({
                        ...p,
                        benefits: Array.isArray(p.benefits) ? p.benefits : [],
                        ingredients: Array.isArray(p.ingredients) ? p.ingredients : [],
                        needs: Array.isArray(p.needs) ? p.needs : [],
                        images: (Array.isArray(p.images) && p.images.length > 0) ? p.images : [p.image],
                    }));
                    setAllProducts(sanitized);
                } else {
                    console.error('API did not return an array:', data);
                    setAllProducts([]);
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setIsLoading(false);
            });
    }, []);

    // Start with all products (ensure it's an array)
    let filteredProducts = Array.isArray(allProducts) ? [...allProducts] : [];

    let title = 'All Products';
    let heroImage = CATEGORY_IMAGES['Default'];
    let description = CATEGORY_DESCRIPTIONS['Default'];

    // 1. Category / Therapeutic Class Filter (Case-Insensitive)
    if (category) {
        const lowerCategory = category.toLowerCase();
        filteredProducts = filteredProducts.filter(p => {
            const needs = Array.isArray(p.needs) ? p.needs : [];
            const pIngredients = Array.isArray(p.ingredients) ? p.ingredients : [];
            const pPortfolio = p.portfolio || '';
            // Check needs, ingredients list, or portfolio (Therapeutic Class)
            return needs.some(n => n.toLowerCase() === lowerCategory) ||
                pIngredients.some(i => i.toLowerCase() === lowerCategory) ||
                pPortfolio.toLowerCase() === lowerCategory;
        });

        // Find the "pretty" version of the category name for the title
        const displayCategory = CATEGORIES.find(c => c.toLowerCase() === lowerCategory) || category;
        title = displayCategory;
        heroImage = CATEGORY_IMAGES[displayCategory] || CATEGORY_IMAGES['Default'];
        description = CATEGORY_DESCRIPTIONS[displayCategory] || CATEGORY_DESCRIPTIONS['Default'];
    }

    // 2. Format Filter (Additive, Case-Insensitive)
    if (format) {
        const lowerFormat = format.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.format?.toLowerCase() === lowerFormat
        );
        if (title === 'All Products') {
            const displayFormat = FORMATS.find(f => f.toLowerCase() === lowerFormat) || format;
            title = displayFormat;
            heroImage = CATEGORY_IMAGES[displayFormat] || CATEGORY_IMAGES['Default'];
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
                {isLoading ? (
                    <div className={styles.loading}>
                        <h2 className="serif">Updating wellness essentials...</h2>
                    </div>
                ) : (
                    <>
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
                    </>
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
