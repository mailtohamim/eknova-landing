'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ProductForm.module.css';
import Button from '@/components/ui/Button';
import { CATEGORIES, FORMATS } from '@/lib/data/products';

export default function NewProductPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        tagline: '',
        description: '',
        price: '',
        image: '',
        usage: '',
        format: FORMATS[0],
        portfolio: 'Herbal',
        stock: '100',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                    stock: parseInt(formData.stock),
                }),
            });

            if (res.ok) {
                router.push('/ek-admin/products');
                router.refresh();
            }
        } catch (error) {
            console.error('Error saving product:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.formContainer}>
            <h1 className="serif">Add New Product</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.grid}>
                    <div className={styles.field}>
                        <label>Product Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.field}>
                        <label>Slug (URL Friendly)</label>
                        <input name="slug" value={formData.slug} onChange={handleChange} required placeholder="e.g. organic-ashwagandha" />
                    </div>
                    <div className={styles.field}>
                        <label>Tagline</label>
                        <input name="tagline" value={formData.tagline} onChange={handleChange} required />
                    </div>
                    <div className={styles.field}>
                        <label>Price ($)</label>
                        <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} required />
                    </div>
                    <div className={styles.field}>
                        <label>Image URL</label>
                        <input name="image" value={formData.image} onChange={handleChange} required />
                    </div>
                    <div className={styles.field}>
                        <label>Format</label>
                        <select name="format" value={formData.format} onChange={handleChange}>
                            {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label>Portfolio</label>
                        <select name="portfolio" value={formData.portfolio} onChange={handleChange}>
                            <option value="Herbal">Herbal</option>
                            <option value="Nutraceuticals">Nutraceuticals</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label>Initial Stock</label>
                        <input name="stock" type="number" value={formData.stock} onChange={handleChange} required />
                    </div>
                </div>

                <div className={styles.field}>
                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required rows={4} />
                </div>

                <div className={styles.field}>
                    <label>Usage Instructions</label>
                    <textarea name="usage" value={formData.usage} onChange={handleChange} required rows={2} />
                </div>

                <div className={styles.actions}>
                    <Button type="button" variant="secondary" onClick={() => router.back()}>Cancel</Button>
                    <Button type="submit" variant="primary" disabled={isLoading}>
                        {isLoading ? 'Saving...' : 'Create Product'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
