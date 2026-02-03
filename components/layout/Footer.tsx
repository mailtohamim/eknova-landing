import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    {/* About Column */}
                    <div className={styles.column}>
                        <h4 className="serif">About Eknova</h4>
                        <p className={styles.description}>
                            Premium botanical wellness from Bangladesh. Nature-powered solutions backed by science.
                        </p>
                    </div>

                    {/* Products Column */}
                    <div className={styles.column}>
                        <h4 className="serif">Products</h4>
                        <ul className={styles.links}>
                            <li><Link href="/products">All Products</Link></li>
                            <li><Link href="/products?category=Adaptogens">Adaptogens</Link></li>
                            <li><Link href="/products?category=Antioxidants">Antioxidants</Link></li>
                            <li><Link href="/products?category=Superfoods">Superfoods</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className={styles.column}>
                        <h4 className="serif">Company</h4>
                        <ul className={styles.links}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/account">My Account</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className={styles.column}>
                        <h4 className="serif">Contact</h4>
                        <address className={styles.address}>
                            <p>Beacon Business Centre<br />
                                9/B/2, Toyenbee Circular Road<br />
                                Motijheel, Dhaka, Bangladesh</p>
                            <p>info@ub-nutra.com</p>
                        </address>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Eknova. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/terms">Terms</Link>
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/shipping">Shipping</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
