'use client';

import Link from 'next/link';
import { CATEGORIES, FORMATS } from '@/lib/data/products';
import styles from './MegaMenu.module.css';

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.megaMenu} onMouseLeave={onClose}>
            <div className="container">
                <div className={styles.grid}>

                    {/* Column 1: Explore By Need */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Explore By Need</h3>
                        <ul className={styles.linkList}>
                            {CATEGORIES.slice(0, 15).map(cat => (
                                <li key={cat}>
                                    <Link
                                        href={`/products?category=${encodeURIComponent(cat)}`}
                                        className={styles.link}
                                        onClick={onClose}
                                    >
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: More Needs */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>&nbsp;</h3>
                        <ul className={styles.linkList}>
                            {CATEGORIES.slice(15).map(cat => (
                                <li key={cat}>
                                    <Link
                                        href={`/products?category=${encodeURIComponent(cat)}`}
                                        className={styles.link}
                                        onClick={onClose}
                                    >
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Explore By Format */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Explore By Format</h3>
                        <ul className={styles.linkList}>
                            {FORMATS.map(fmt => (
                                <li key={fmt}>
                                    <Link
                                        href={`/products?format=${encodeURIComponent(fmt)}`}
                                        className={styles.link}
                                        onClick={onClose}
                                    >
                                        {fmt}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Popular / Featured (Optional, matching Swisse layout) */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>Popular Categories</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="/products?sort=best-sellers" className={styles.link} onClick={onClose}>Best Sellers</Link></li>
                            <li><Link href="/products?query=new" className={styles.link} onClick={onClose}>New Products</Link></li>
                            <li><Link href="/products" className={styles.link} onClick={onClose}>All Vitamins & Supplements</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
