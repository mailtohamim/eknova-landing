import { prisma } from '@/lib/db';
import styles from './AdminDashboard.module.css';

export default async function AdminDashboard() {
    const productCount = await prisma.product.count();
    const orderCount = await prisma.order.count();
    const recentOrders = await prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { user: true }
    });

    return (
        <div>
            <h1 className="serif">Dashboard</h1>
            <p>Welcome to the Eknova Admin Panel.</p>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h3>Products</h3>
                    <p className={styles.statNumber}>{productCount}</p>
                </div>
                <div className={styles.statCard}>
                    <h3>Orders</h3>
                    <p className={styles.statNumber}>{orderCount}</p>
                </div>
                <div className={styles.statCard}>
                    <h3>Customers</h3>
                    <p className={styles.statNumber}>0</p>
                </div>
            </div>

            <section className={styles.section}>
                <h2 className="serif">Recent Orders</h2>
                {recentOrders.length > 0 ? (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id.slice(-8)}</td>
                                    <td>{order.user?.name || 'Guest'}</td>
                                    <td>${order.totalAmount}</td>
                                    <td><span className={styles.statusBadge}>{order.status}</span></td>
                                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No orders yet.</p>
                )}
            </section>
        </div>
    );
}
