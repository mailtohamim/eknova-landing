'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORIES, FORMATS } from '@/lib/data/products-new';
import Button from '@/components/ui/Button';
import { Trash2, Plus, ArrowLeft, Save } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './ProductForm.module.css';

interface ProductFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export default function ProductForm({ initialData, isEditing = false }: ProductFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        tagline: '',
        description: '',
        price: '',
        image: '',
        images: [] as string[],
        usage: '',
        format: FORMATS[0],
        portfolio: 'Herbal',
        stock: '100',
        benefits: [] as string[],
        ingredients: [] as string[],
        needs: [] as string[],
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                price: initialData.price.toString(),
                stock: initialData.stock.toString(),
                images: initialData.images || [],
                benefits: initialData.benefits || [],
                ingredients: initialData.ingredients || [],
                needs: initialData.needs || [],
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleArrayChange = (field: 'benefits' | 'ingredients' | 'needs' | 'images', index: number, value: string) => {
        setFormData(prev => {
            const newArray = [...prev[field]];
            newArray[index] = value;
            return { ...prev, [field]: newArray };
        });
    };

    const addArrayItem = (field: 'benefits' | 'ingredients' | 'needs' | 'images') => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], '']
        }));
    };

    const removeArrayItem = (field: 'benefits' | 'ingredients' | 'needs' | 'images', index: number) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = {
            ...formData,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock),
            // Filter out empty items
            benefits: formData.benefits.filter(b => b.trim() !== ''),
            ingredients: formData.ingredients.filter(i => i.trim() !== ''),
            needs: formData.needs.filter(n => n.trim() !== ''),
            images: formData.images.filter(img => img.trim() !== ''),
        };

        try {
            const url = isEditing ? `/api/products/${initialData.id}` : '/api/products';
            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                toast.success(isEditing ? 'Product updated successfully' : 'Product created successfully');
                router.push('/ek-admin/products');
                router.refresh();
            } else {
                const error = await res.json();
                toast.error(error.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error saving product:', error);
            toast.error('Failed to save product');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <button type="button" onClick={() => router.back()} className={styles.backBtn}>
                        <ArrowLeft size={18} />
                        Back
                    </button>
                    <h1 className="serif">{isEditing ? 'Edit Product' : 'Add New Product'}</h1>
                </div>
                <div className={styles.headerActions}>
                    <Button type="submit" variant="primary" disabled={isLoading} className={styles.saveBtn}>
                        <Save size={18} />
                        {isLoading ? 'Saving...' : (isEditing ? 'Update Product' : 'Create Product')}
                    </Button>
                </div>
            </div>

            <div className={styles.layout}>
                <div className={styles.mainContent}>
                    <section className={styles.section}>
                        <h3>Basic Information</h3>
                        <div className={styles.grid}>
                            <div className={styles.field}>
                                <label>Product Name</label>
                                <input name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Psyllium Husk 700 mg" />
                            </div>
                            <div className={styles.field}>
                                <label>Slug (URL Friendly)</label>
                                <input name="slug" value={formData.slug} onChange={handleChange} required placeholder="e.g. psyllium-husk-700mg" />
                            </div>
                            <div className={styles.field} style={{ gridColumn: 'span 2' }}>
                                <label>Tagline</label>
                                <input name="tagline" value={formData.tagline} onChange={handleChange} required placeholder="e.g. Natural Digestive Support" />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label>Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} required rows={4} />
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h3>Inventory & Pricing</h3>
                        <div className={styles.grid}>
                            <div className={styles.field}>
                                <label>Price ($)</label>
                                <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} required />
                            </div>
                            <div className={styles.field}>
                                <label>Initial Stock</label>
                                <input name="stock" type="number" value={formData.stock} onChange={handleChange} required />
                            </div>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3>Key Benefits</h3>
                            <button type="button" onClick={() => addArrayItem('benefits')} className={styles.addBtn}>
                                <Plus size={16} /> Add Benefit
                            </button>
                        </div>
                        {formData.benefits.map((benefit, idx) => (
                            <div key={idx} className={styles.arrayField}>
                                <input value={benefit} onChange={(e) => handleArrayChange('benefits', idx, e.target.value)} placeholder="Enter a benefit..." />
                                <button type="button" onClick={() => removeArrayItem('benefits', idx)} className={styles.removeBtn}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3>Ingredients</h3>
                            <button type="button" onClick={() => addArrayItem('ingredients')} className={styles.addBtn}>
                                <Plus size={16} /> Add Ingredient
                            </button>
                        </div>
                        {formData.ingredients.map((item, idx) => (
                            <div key={idx} className={styles.arrayField}>
                                <input value={item} onChange={(e) => handleArrayChange('ingredients', idx, e.target.value)} placeholder="Enter an ingredient..." />
                                <button type="button" onClick={() => removeArrayItem('ingredients', idx)} className={styles.removeBtn}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </section>

                    <section className={styles.section}>
                        <label>Usage Instructions</label>
                        <textarea name="usage" value={formData.usage} onChange={handleChange} required rows={2} placeholder="How to use this product..." />
                    </section>
                </div>

                <div className={styles.sidebar}>
                    <section className={styles.sectionSquare}>
                        <h3>Categorization</h3>
                        <div className={styles.field}>
                            <label>Portfolio</label>
                            <select name="portfolio" value={formData.portfolio} onChange={handleChange}>
                                <option value="Herbal">Herbal</option>
                                <option value="Nutraceuticals">Nutraceuticals</option>
                            </select>
                        </div>
                        <div className={styles.field}>
                            <label>Format</label>
                            <select name="format" value={formData.format} onChange={handleChange}>
                                {FORMATS.map(f => <option key={f} value={f}>{f}</option>)}
                            </select>
                        </div>
                    </section>

                    <section className={styles.sectionSquare}>
                        <div className={styles.sectionHeader}>
                            <h3>Health Needs</h3>
                            <button type="button" onClick={() => addArrayItem('needs')} className={styles.addBtn}>
                                <Plus size={16} />
                            </button>
                        </div>
                        <div className={styles.needsList}>
                            {formData.needs.map((need, idx) => (
                                <div key={idx} className={styles.arrayField}>
                                    <select value={need} onChange={(e) => handleArrayChange('needs', idx, e.target.value)}>
                                        <option value="">Select Need</option>
                                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <button type="button" onClick={() => removeArrayItem('needs', idx)} className={styles.removeBtn}>
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className={styles.sectionSquare}>
                        <h3>Main Image</h3>
                        <div className={styles.field}>
                            <input name="image" value={formData.image} onChange={handleChange} required placeholder="Main Image URL" />
                            {formData.image && <img src={formData.image} className={styles.imagePreview} alt="Preview" />}
                        </div>

                        <div className={styles.sectionHeader} style={{ marginTop: '1.5rem' }}>
                            <h3>More Images</h3>
                            <button type="button" onClick={() => addArrayItem('images')} className={styles.addBtn}>
                                <Plus size={16} />
                            </button>
                        </div>
                        {formData.images.map((img, idx) => (
                            <div key={idx} className={styles.arrayField}>
                                <input value={img} onChange={(e) => handleArrayChange('images', idx, e.target.value)} placeholder="Image URL..." />
                                <button type="button" onClick={() => removeArrayItem('images', idx)} className={styles.removeBtn}>
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </form>
    );
}
