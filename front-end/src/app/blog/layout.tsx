import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations('Pages.Blog');

    return {
        title: 'Blog',
        description: t('My personal blog'),
    };
}

export default function CertificadosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return children;
}
