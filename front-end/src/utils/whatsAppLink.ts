import { useEffect, useState } from 'react';

export const WhatsAppLink = (phoneNumber: string) => {
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    const message = encodeURIComponent('Olá, vim pelo site');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const isClient = typeof window !== 'undefined' && typeof navigator !== 'undefined';

        if (isClient) {
            setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
        }
    }, []);

    if (isMobile) {
        return `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${message}`;
    } else {
        return `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${message}`;
    }
};
