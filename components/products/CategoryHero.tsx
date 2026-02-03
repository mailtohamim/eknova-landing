import Image from 'next/image';
import styles from './CategoryHero.module.css';

interface CategoryHeroProps {
    title: string;
    description: string;
    image: string;
}

export default function CategoryHero({ title, description, image }: CategoryHeroProps) {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.imageContainer}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    priority
                />
            </div>
            <div className={styles.contentOverlay}>
                <div className="container">
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
