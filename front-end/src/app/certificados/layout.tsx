import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
    const t = await getTranslations('Pages.Certificates');

    return {
        title: t('Certificates'),
        description: t('Certificates I have received'),
    };
}

export default function CertificadosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return children;
}
