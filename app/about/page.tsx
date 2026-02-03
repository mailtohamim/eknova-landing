import styles from '@/app/page.module.css';

export default function AboutPage() {
    return (
        <div className="container section-padding">
            <div className={styles.heroContent} style={{ margin: '0 auto', textAlign: 'center' }}>
                <h1 className="serif">About Eknova</h1>
                <p className={styles.heroSubtext}>
                    Premium Botanical Wellness from Bangladesh.
                </p>
            </div>

            <div className={styles.whyEknova} style={{ marginTop: '4rem' }}>
                <p className={styles.whyText}>
                    Eknova is dedicated to bridging the gap between ancient herbal wisdom and modern scientific validation.
                    Founded in Bangladesh, we source the finest organic botanicals and engineer advanced Nutraceuticals
                    to create a diverse portfolio that truly makes a difference in your life.
                </p>

                <h3 className="serif" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h3>
                <p>
                    To empower individuals to take control of their health through natural, sustainable, and effective solutions.
                </p>
            </div>
        </div>
    );
}
