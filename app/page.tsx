import Link from 'next/link';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/sections/ProductCard';
import ProductCarousel from '@/components/sections/ProductCarousel';
import CollectionCarousel from '@/components/sections/CollectionCarousel';
import ArticleCarousel from '@/components/sections/ArticleCarousel';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import { prisma } from '@/lib/db';
import styles from './page.module.css';
import { Product, ProductFormat } from '@/types/product';

export default async function HomePage() {
  const dbProducts = await prisma.product.findMany({
    take: 12,
    orderBy: { createdAt: 'desc' },
  });

  const featuredProducts: Product[] = dbProducts.map(p => ({
    ...p,
    format: p.format as ProductFormat,
    benefits: (p.benefits as string[]) || [],
    ingredients: (p.ingredients as string[]) || [],
    needs: (p.needs as string[]) || [],
    images: (Array.isArray(p.images) && p.images.length > 0)
      ? (p.images as string[])
      : [p.image],
    portfolio: p.portfolio as any,
  }));

  return (
    <>
      {/* Hero Section - Split Layout */}
      {/* Hero Section - Full Width */}
      <section className={styles.heroFull}>
        <div className={styles.heroImageWrapper}>
          <video
            src="/images/Couple Running.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.heroContentOverlay}>
          <h1>
            Health
            <span className={styles.serifText}>Made</span>
            Simple.
          </h1>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/SVG/Organic Sourcing.svg" alt="Organic Sourcing" width={32} height={32} />
              </div>
              <h3>Organic Sourcing</h3>
              <p>Pure plant extracts from sustainable farms</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/SVG/Holistic Wellness.svg" alt="Holistic Wellness" width={32} height={32} />
              </div>
              <h3>Holistic Wellness</h3>
              <p>Mind-body balance through nature</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/SVG/Standardized.svg" alt="Standardized" width={32} height={32} />
              </div>
              <h3>Standardized</h3>
              <p>Consistent potency in every capsule</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <img src="/SVG/Sustainable.svg" alt="Sustainable" width={32} height={32} />
              </div>
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
                <img src="/SVG/Immunity.svg" alt="Immunity" width={32} height={32} />
              </div>
              <span>Immunity</span>
            </Link>
            <Link href="/products?category=Bone & Joints" className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <img src="/SVG/Bones and Joints.svg" alt="Bones & Joints" width={32} height={32} />
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
          <div className={styles.sectionHeader} style={{ display: 'none' }}>
            {/* Header effectively replaced by Carousel's internal header, hiding to avoid duplication if needed, 
                or simplistic replacement: The Carousel contains its own header now. */}
          </div>
          {/* Replaced static grid with Carousel */}
          <ArticleCarousel />
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

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
                <img src="/SVG/Trusted Quality.svg" alt="Trusted Quality" width={48} height={48} />
              </div>
              <h3>Trusted Quality</h3>
              <p>GMP Certified & Lab Tested</p>
            </div>

            {/* Icon 2 */}
            <div className={styles.iconItem}>
              <div className={styles.iconWrapper}>
                <img src="/SVG/Globally Sourced.svg" alt="Globally Sourced" width={48} height={48} />
              </div>
              <h3>Globally Sourced</h3>
              <p>Premium Ingredients from Around the World</p>
            </div>

            {/* Icon 3 */}
            <div className={styles.iconItem}>
              <div className={styles.iconWrapper}>
                <img src="/SVG/Award Winning.svg" alt="Award Winning" width={48} height={48} />
              </div>
              <h3>Award Winning</h3>
              <p>Recognized for Excellence</p>
            </div>

            {/* Icon 4 */}
            <div className={styles.iconItem}>
              <div className={styles.iconWrapper}>
                <img src="/SVG/Science Backed.svg" alt="Science Backed" width={48} height={48} />
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
