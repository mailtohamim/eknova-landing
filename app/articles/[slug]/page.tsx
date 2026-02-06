import { notFound } from 'next/navigation';
import { articles } from '@/lib/data/articles';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import styles from './page.module.css';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find(a => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.backLink}>
                <Link href="/">
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            <article className={styles.article}>
                <header className={styles.header}>
                    <div className={styles.meta}>
                        <span className={styles.tag}>{article.tag}</span>
                        <span className={styles.date}>{article.date}</span>
                    </div>

                    <h1 className={styles.title}>{article.title}</h1>

                    <div className={styles.author}>
                        By {article.author} • {article.readTime}
                    </div>

                    <div className={styles.heroImage}>
                        <img src={article.image} alt={article.title} />
                    </div>
                </header>

                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}
