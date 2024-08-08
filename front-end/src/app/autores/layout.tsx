import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations('Pages.Authors');

    return {
        title: t('Authors'),
        description: t('Authors who have participated in projects with me'),
    };
}

export default function AutoresLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return children;
}
