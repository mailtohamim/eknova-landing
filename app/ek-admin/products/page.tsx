import Link from 'next/link';
import { prisma } from '@/lib/db';
import styles from './AdminProducts.module.css';
import Button from '@/components/ui/Button';

export default async function AdminProducts() {
    const products = await prisma.product.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return (
        <div>
            <div className={styles.header}>
                <h1 className="serif">Products</h1>
                <Button variant="primary">
                    <Link href="/ek-admin/products/new">Add New Product</Link>
                </Button>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Portfolio</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} alt={product.name} className={styles.productThumb} />
                                </td>
                                <td>
                                    <div className={styles.productName}>{product.name}</div>
                                    <div className={styles.productSlug}>{product.slug}</div>
                                </td>
                                <td>${product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.portfolio}</td>
                                <td className={styles.actions}>
                                    <Link href={`/ek-admin/products/${product.id}`} className={styles.editBtn}>Edit</Link>
                                    <button className={styles.deleteBtn}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
