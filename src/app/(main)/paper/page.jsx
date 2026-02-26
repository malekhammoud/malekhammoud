'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        window.location.href = 'https://www.malekhammoud.com/Autonomous_Litter_Detection_and_Recovery_System.pdf';
    }, []);

    return <p>Redirecting...</p>;
}