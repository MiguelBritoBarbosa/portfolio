import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations('Pages.Projects');

    return {
        title: t('Projects'),
        description: t('Projects I participated in'),
    };
}
export default function ProjetosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return children;
}
