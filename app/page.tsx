import Link from 'next/link';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/sections/ProductCard';
import ProductCarousel from '@/components/sections/ProductCarousel';
import CollectionCarousel from '@/components/sections/CollectionCarousel';
import { products } from '@/lib/data/products';
import styles from './page.module.css';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      {/* Hero Section - Split Layout */}
      <section className={styles.heroSplit}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContentLeft}>
            <h1 className="">Science Meets Nature</h1>

            {/* Buttons removed as per request for cleaner look */}
            <div className={styles.heroActions}>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop"
            alt="Science and Nature"
          />
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Organic Sourcing</h3>
              <p>Pure plant extracts from sustainable farms</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Holistic Wellness</h3>
              <p>Mind-body balance through nature</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Standardized</h3>
              <p>Consistent potency in every capsule</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainable</h3>
              <p>Earth-friendly practices throughout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Carousel (New Portrait Banner Style) */}
      <section className="section-padding" style={{ overflow: 'hidden' }}>
        <div className="container">
          <CollectionCarousel />
        </div>
      </section>

      {/* Shop by Benefit/Need */}
      <section className="section-padding" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="">Shop by Benefit</h2>
            <p>Find solutions tailored to your needs</p>
          </div>
          <div className={styles.benefitGrid}>
            <Link href="/products?category=Stress & anxiety" className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Stress Relief</span>
            </Link>
            <Link href="/products?category=Sleep" className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Sleep</span>
            </Link>
            <Link href="/products?category=Energy" className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Energy</span>
            </Link>
            <Link href="/products?category=Immunomodulator" className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Immunity</span>
            </Link>
            <Link href="/products?category=Bone & Joints" className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 19.5c.3.5.7.8 1.1 1 .5.3 2.1.2 3.4-.6 1.3-.8 1.8-2.3 1.2-2.9-.5-.6-1.9-1.3-4.1-.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 4.5c-.3-.5-.7-.8-1.1-1-.5-.3-2.1-.2-3.4.6C1.2 4.9.7 6.4 1.3 7c.5.6 1.9 1.3 4.1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.4 5.3 6.6 18.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 9c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3c0 .8.3 1.6.9 2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 15c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3c0-.8-.3-1.6-.9-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Bones & Joints</span>
            </Link>
            <Link href="/products?category=Men's health" className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Men's Health</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Carousel Style */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="">Best Sellers</h2>
            <p>Our community favorites</p>
          </div>

          <div className={styles.productCarouselWrapper}>
            <ProductCarousel products={featuredProducts} />
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Button variant="ghost" size="large">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wellness Hub */}
      <section className="section-padding" style={{ background: 'var(--color-beige)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="">Wellness Hub</h2>
            <p>Expert advice and inspiration for your health journey</p>
          </div>
          <div className={styles.hubGrid}>
            <div className={styles.hubCard}>
              <img src="https://images.unsplash.com/photo-1544367563-12123d832d73?q=80&w=800&auto=format&fit=crop" alt="Yoga" />
              <div className={styles.hubContent}>
                <span className={styles.hubTag}>Lifestyle</span>
                <h3>5 Morning Habits for All-Day Energy</h3>
                <p>Start your day right with these simple, science-backed routines.</p>
                <Button variant="ghost">Read More</Button>
              </div>
            </div>
            <div className={styles.hubCard}>
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop" alt="Food" />
              <div className={styles.hubContent}>
                <span className={styles.hubTag}>Nutrition</span>
                <h3>The Truth About Superfoods</h3>
                <p>Decoding the myths and facts behind popular nutritional powerhouses.</p>
                <Button variant="ghost">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram / Social Proof */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>@EknovaWellness</h2>
            <p>Join our community on Instagram</p>
          </div>
          <div className={styles.instaGrid}>
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop" alt="Community 1" />
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=400&auto=format&fit=crop" alt="Community 2" />
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa8795?q=80&w=400&auto=format&fit=crop" alt="Community 3" />
            <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=400&auto=format&fit=crop" alt="Community 4" />
          </div>
        </div>
      </section>

      {/* Why Eknova - Refined */}
      {/* Why Eknova - Icon Grid Style */}
      <section className="section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.whyTitle}>WHY EKNOVA?</h2>
            <p className={styles.whySubtitle}>
              Eknova is your trusted partner for premium herbal nutrition. Backed by science and nature,
              we bring you formulations that truly work. Because your health deserves the best.
            </p>
          </div>

          <div className={styles.iconGrid}>
            {/* Icon 1 */}
            <div className={styles.iconItem}>
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Trusted Quality</h3>
              <p>GMP Certified & Lab Tested</p>
            </div>

            {/* Icon 2 */}
            <div className={styles.iconItem}>
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.74 5.74-2.12 2.12-3.62-3.62-3.62 3.62-2.12-2.12 5.74-5.74zM12 22c5.52 0 10-4.48 10-10s-4.48-10-10-10-10 4.48-10 10 4.48 10 10 10z" /> {/* Leaf-ish abstract */}
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <h3>Globally Sourced</h3>
              <p>Premium Ingredients from Around the World</p>
            </div>

            {/* Icon 3 */}
            <div className={styles.iconItem}>
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h3>Award Winning</h3>
              <p>Recognized for Excellence</p>
            </div>

            {/* Icon 4 */}
            <div className={styles.iconItem}>
              <div className={styles.iconWrapper}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Science Backed</h3>
              <p>Formulated by Experts</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
