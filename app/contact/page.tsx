import styles from '@/components/ui/Input.module.css';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <div className="container section-padding">
            <h1 className="serif" style={{ textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h1>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666' }}>
                    Have questions? We'd love to hear from you.
                </p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label}>Name</label>
                        <input className={styles.input} type="text" placeholder="Your Name" />
                    </div>

                    <div className={styles.inputWrapper}>
                        <label className={styles.label}>Email</label>
                        <input className={styles.input} type="email" placeholder="your@email.com" />
                    </div>

                    <div className={styles.inputWrapper}>
                        <label className={styles.label}>Message</label>
                        <textarea className={styles.input} rows={5} placeholder="How can we help?" style={{ resize: 'vertical' }} />
                    </div>

                    <Button variant="primary" size="large" fullWidth>Send Message</Button>
                </form>

                <div style={{ marginTop: '4rem', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                    <h3 className="serif">Visit Us</h3>
                    <p>Beacon Business Centre<br />9/B/2, Toyenbee Circular Road<br />Motijheel, Dhaka</p>
                    <p style={{ marginTop: '1rem' }}>Email: info@ub-nutra.com</p>
                </div>
            </div>
        </div>
    );
}
