import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prêmios',
    description: 'Reconhecimentos que recebi',
};

export default function PremiosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
