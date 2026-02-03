'use client';

import { useState } from 'react';
import styles from './Accordion.module.css';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={styles.item}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className={styles.title}>{title}</span>
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
            </button>
            <div
                className={`${styles.content} ${isOpen ? styles.open : ''}`}
            >
                <div className={styles.contentInner}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export function AccordionGroup({ children }: { children: React.ReactNode }) {
    return <div className={styles.group}>{children}</div>;
}
