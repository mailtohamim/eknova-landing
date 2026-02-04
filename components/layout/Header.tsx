'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { useCurrencyStore } from '@/lib/store/currencyStore';
import { useCartStore } from '@/lib/store/cartStore';
import MegaMenu from './MegaMenu';
import styles from './Header.module.css';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const pathname = usePathname();
    const router = useRouter();
    const itemCount = useCartStore(state => state.getItemCount());
    const openCart = useCartStore(state => state.openCart);
    const { currency, toggleCurrency } = useCurrencyStore();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/products', label: 'Vitamins & Supplements', hasMegaMenu: true },
        { href: '/about', label: 'Who We Are' },
        { href: '/wellness-hub', label: 'Wellness Hub' },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/products?query=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
        }
    };

    return (
        <header className={styles.header} onMouseLeave={() => setMegaMenuOpen(false)}>
            <div className="container" style={{ position: 'relative' }}>
                <div className={styles.headerContent}>
                    {/* Logo - Fixed Size */}
                    <Link href="/" className={styles.logo}>
                        <div style={{ position: 'relative', width: '120px', height: '40px' }}>
                            <img
                                src="/Eknova Boxed Logo.svg"
                                alt="Eknova"
                                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation - Centered */}
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
                        {/* Search */}
                        <div className={styles.searchWrapper}>
                            {isSearchOpen ? (
                                <form onSubmit={handleSearch} className={styles.searchForm}>
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={styles.searchInput}
                                        autoFocus
                                        onBlur={() => !searchQuery && setIsSearchOpen(false)}
                                    />
                                    <button type="submit" className={styles.iconBtn}><Search size={22} /></button>
                                </form>
                            ) : (
                                <button onClick={() => setIsSearchOpen(true)} className={styles.iconBtn}>
                                    <Search size={22} />
                                </button>
                            )}
                        </div>

                        {/* Profile */}
                        <Link href="/profile" className={styles.iconBtn}>
                            <User size={22} />
                        </Link>

                        {/* Cart */}
                        <button
                            onClick={openCart}
                            className={styles.cartButton}
                            aria-label="Open cart"
                        >
                            <ShoppingBag size={22} />
                            {itemCount > 0 && <span className={styles.cartBadge}>{itemCount}</span>}
                        </button>

                        {/* Currency (Keep compact or remove if needed, keeping for functionality) */}
                        <button className={styles.currencyToggle} onClick={toggleCurrency}>
                            {currency === 'USD' ? '$' : '€'}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={styles.mobileMenuToggle}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
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
