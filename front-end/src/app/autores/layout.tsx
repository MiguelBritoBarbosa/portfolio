import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Autores',
    description: 'Autores de projetos',
};

export default function AutoresLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
