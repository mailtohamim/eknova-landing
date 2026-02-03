import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function SuccessPage() {
    return (
        <div className="container section-padding" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Thank You for Your Order!</h1>
            <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>Your payment was successful. We will email you the confirmation details shortly.</p>
            <Button variant="primary" size="large">
                <Link href="/">Continue Shopping</Link>
            </Button>
        </div>
    );
}
