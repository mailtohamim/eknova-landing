'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCurrencyStore } from '@/lib/store/currencyStore';
import { useCartStore } from '@/lib/store/cartStore';
import MegaMenu from './MegaMenu';
import styles from './Header.module.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const pathname = usePathname();
    const itemCount = useCartStore(state => state.getItemCount());
    const openCart = useCartStore(state => state.openCart);
    const { currency, toggleCurrency } = useCurrencyStore();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Vitamins & Supplements', hasMegaMenu: true },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className={styles.header} onMouseLeave={() => setMegaMenuOpen(false)}>
            <div className="container" style={{ position: 'relative' }}>
                <div className={styles.headerContent}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <div style={{ position: 'relative', width: '120px', height: '40px' }}>
                            <img
                                src="/Eknova Boxed Logo.svg"
                                alt="Eknova"
                                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.desktopNav}>
                        {links.map(link => (
                            <div
                                key={link.href}
                                style={{ height: '100%', display: 'flex', alignItems: 'center' }}
                                onMouseEnter={() => link.hasMegaMenu && setMegaMenuOpen(true)}
                            >
                                <Link
                                    href={link.href}
                                    className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className={styles.actions}>
                        <button
                            className={styles.currencyToggle}
                            onClick={toggleCurrency}
                        >
                            {currency === 'USD' ? '🇺🇸 $' : '🇪🇺 €'}
                        </button>

                        <button
                            onClick={openCart}
                            className={styles.cartButton}
                            aria-label="Open cart"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 2L7 4H2V6H3L6 20H18L21 6H22V4H17L15 2H9Z" />
                                <path d="M9 10V16M15 10V16" />
                            </svg>
                            {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={styles.mobileMenuToggle}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={mobileMenuOpen ? styles.open : ''}></span>
                        </button>
                    </div>
                </div>

                {/* Mega Menu */}
                <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className={styles.mobileNav}>
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
