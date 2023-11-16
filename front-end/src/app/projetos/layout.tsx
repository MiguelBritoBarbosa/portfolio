import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projetos',
    description: 'Meus principais projetos ',
};

export default function ProjetosLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
