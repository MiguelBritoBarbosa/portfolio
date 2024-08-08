import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations('Pages.Awards');

    return {
        title: t('Awards'),
        description: t('Awards I have received throughout my career'),
    };
}

export default function PremiosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return children;
}
