import Link from 'next/link';
import { prisma } from '@/lib/db';
import styles from './AdminProducts.module.css';
import Button from '@/components/ui/Button';
import DeleteProductBtn from './DeleteProductBtn';
import { Edit, Plus, Package } from 'lucide-react';

export default async function AdminProducts() {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className="serif">Products</h1>
                    <p className={styles.subtitle}>Manage your botanical wellness inventory</p>
                </div>
                <Button variant="primary" className={styles.addBtn}>
                    <Link href="/ek-admin/products/new">
                        <Plus size={18} />
                        Add New Product
                    </Link>
                </Button>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Portfolio</th>
                            <th>Status</th>
                            <th className={styles.actionsHeader}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <div className={styles.productCell}>
                                        <img src={product.image} alt={product.name} className={styles.productThumb} />
                                        <div className={styles.productMeta}>
                                            <span className={styles.productName}>{product.name}</span>
                                            <span className={styles.productSlug}>{product.slug}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.price}>${product.price}</td>
                                <td>
                                    <div className={styles.stockCell}>
                                        <Package size={14} />
                                        {product.stock}
                                    </div>
                                </td>
                                <td>
                                    <span className={`${styles.badge} ${styles[product.portfolio?.toLowerCase() || 'herbal']}`}>
                                        {product.portfolio}
                                    </span>
                                </td>
                                <td>
                                    <span className={`${styles.statusDot} ${product.stock > 0 ? styles.active : styles.outOfStock}`}></span>
                                    {product.stock > 0 ? 'Active' : 'Out of Stock'}
                                </td>
                                <td className={styles.actions}>
                                    <Link href={`/ek-admin/products/${product.id}`} className={styles.editBtn}>
                                        <Edit size={16} />
                                        Edit
                                    </Link>
                                    <DeleteProductBtn
                                        id={product.id}
                                        name={product.name}
                                        className={styles.deleteBtn}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {products.length === 0 && (
                    <div className={styles.emptyState}>
                        <Package size={48} />
                        <p>No products found. Start by adding one!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
