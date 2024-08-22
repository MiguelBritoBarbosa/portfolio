import { useLocale } from 'next-intl';

export const FormatDate = (date: string): string => {
    const locale = useLocale();
    const dateObj = new Date(date);
    if (locale === 'pt') {
        return dateObj.toLocaleDateString('pt-BR', {
            timeZone: 'UTC',
        });
    } else {
        return dateObj.toLocaleDateString('en', {
            timeZone: 'UTC',
        });
    }
};
