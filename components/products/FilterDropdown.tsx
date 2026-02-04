'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './FilterDropdown.module.css';
import { ChevronDown } from 'lucide-react';

interface Option {
    label: string;
    value: string;
}

interface FilterDropdownProps {
    label: string;
    options: Option[];
    value: string | null;
    onChange: (value: string | null) => void;
    placeholder?: string;
}

export default function FilterDropdown({
    label,
    options,
    value,
    onChange,
    placeholder = 'Select option'
}: FilterDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.container} ref={dropdownRef}>
            <span className={styles.label}>{label}</span>
            <div
                className={`${styles.dropdown} ${isOpen ? styles.isOpen : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles.currentValue}>
                    {selectedOption ? selectedOption.label : placeholder}
                </div>
                <ChevronDown className={`${styles.icon} ${isOpen ? styles.rotate : ''}`} size={16} />

                {isOpen && (
                    <div className={styles.menu}>
                        <div
                            className={`${styles.option} ${!value ? styles.active : ''}`}
                            onClick={() => {
                                onChange(null);
                                setIsOpen(false);
                            }}
                        >
                            All {label}s
                        </div>
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                className={`${styles.option} ${value === opt.value ? styles.active : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onChange(opt.value);
                                    setIsOpen(false);
                                }}
                            >
                                {opt.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
