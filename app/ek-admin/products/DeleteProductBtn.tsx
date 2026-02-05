'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface DeleteProductBtnProps {
    id: string;
    name: string;
    className?: string;
}

export default function DeleteProductBtn({ id, name, className }: DeleteProductBtnProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm(`Are you sure you want to delete "${name}"?`)) return;

        setIsDeleting(true);
        try {
            const res = await fetch(`/api/products/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                toast.success('Product deleted');
                router.refresh();
            } else {
                toast.error('Failed to delete product');
            }
        } catch (error) {
            toast.error('Error deleting product');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={className}
            title="Delete Product"
        >
            <Trash2 size={16} />
            {isDeleting ? '...' : 'Delete'}
        </button>
    );
}
