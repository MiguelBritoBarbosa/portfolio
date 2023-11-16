import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Titulo do Projeto',
    description: 'Projeto X',
};

export default async function ProjetoPage() {
    return (
        <>
            <h1>PROJETO</h1>
        </>
    );
}
