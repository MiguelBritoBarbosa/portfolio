import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Destaques',
    description: 'Meus projetos que se destacam dos demais ',
};

export default function DestaquesLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
