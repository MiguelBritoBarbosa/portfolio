export const whatsAppLink = (phoneNumber: string) => {
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    const message = encodeURIComponent('Olá, vim pelo site');

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        return `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${message}`;
    } else {
        return `https://web.whatsapp.com/send?phone=${formattedPhone}&text=${message}`;
    }
};
