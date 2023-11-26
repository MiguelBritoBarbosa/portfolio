import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Certificados',
    description: 'Certificados que recebi',
};

export default function CertificadosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
