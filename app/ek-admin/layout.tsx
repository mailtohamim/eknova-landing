import Link from 'next/link';
import styles from './AdminLayout.module.css';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.adminContainer}>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2 className="serif">EK-Admin</h2>
                </div>
                <nav className={styles.nav}>
                    <Link href="/ek-admin" className={styles.navLink}>Dashboard</Link>
                    <Link href="/ek-admin/products" className={styles.navLink}>Products</Link>
                    <Link href="/ek-admin/orders" className={styles.navLink}>Orders</Link>
                    <Link href="/ek-admin/categories" className={styles.navLink}>Categories</Link>
                    <div className={styles.divider}></div>
                    <Link href="/" className={styles.navLink}>View Site</Link>
                </nav>
            </aside>
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
