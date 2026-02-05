'use client';

import { useState, useEffect } from 'react';
import styles from './ProfilePage.module.css';

interface OrderItem {
    id: string;
    productId: string;
    quantity: number;
    price: number;
}

interface Order {
    id: string;
    status: string;
    totalAmount: number;
    createdAt: string;
    items: OrderItem[];
}

export default function ProfilePage() {
    const [email, setEmail] = useState('');
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearched, setIsSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        try {
            const res = await fetch(`/api/orders?email=${encodeURIComponent(email)}`);
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setOrders(data);
            setIsSearched(true);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setOrders([]);
            setIsSearched(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container section-padding">
            <h1 className="serif">Your Profile</h1>

            {!isSearched ? (
                <div className={styles.loginCard}>
                    <h2>Track Your Orders</h2>
                    <p>Enter your email address to view your order history and status.</p>
                    <form onSubmit={handleSearch} className={styles.form}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Searching...' : 'View Orders'}
                        </button>
                    </form>
                </div>
            ) : (
                <div className={styles.profileContent}>
                    <div className={styles.userInfo}>
                        <p>Showing orders for: <strong>{email}</strong></p>
                        <button onClick={() => setIsSearched(false)} className={styles.resetBtn}>Change Email</button>
                    </div>

                    <section className={styles.ordersSection}>
                        <h2 className="serif">Order History</h2>
                        {orders.length > 0 ? (
                            <div className={styles.ordersList}>
                                {orders.map((order) => (
                                    <div key={order.id} className={styles.orderCard}>
                                        <div className={styles.orderHeader}>
                                            <div>
                                                <span className={styles.orderLabel}>Order ID:</span>
                                                <span className={styles.orderValue}>#{order.id.slice(-8)}</span>
                                            </div>
                                            <div className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                                                {order.status}
                                            </div>
                                        </div>
                                        <div className={styles.orderBody}>
                                            <div className={styles.orderDetails}>
                                                <p>{order.items.length} items</p>
                                                <p className={styles.orderDate}>{new Date(order.createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <div className={styles.orderTotal}>
                                                ${order.totalAmount}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.empty}>
                                <p>No orders found for this email.</p>
                            </div>
                        )}
                    </section>
                </div>
            )}
        </div>
    );
}
