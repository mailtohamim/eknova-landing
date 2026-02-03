import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    hover?: boolean;
    className?: string;
    onClick?: () => void;
}

export default function Card({ children, hover = false, className = '', onClick }: CardProps) {
    return (
        <div
            className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
