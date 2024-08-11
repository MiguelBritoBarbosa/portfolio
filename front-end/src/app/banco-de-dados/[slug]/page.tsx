import { getBancoDeDados } from '@/config/data/bancoDeDados/getBancoDeDados';
import BancoDeDados from '@/containers/BancoDeDados';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const bancoDeDados: any = await getBancoDeDados(params.slug);
    if (bancoDeDados !== undefined && bancoDeDados.data.length > 0) {
        return {
            title: bancoDeDados.data[0].attributes.titulo,
            description: bancoDeDados.data[0].attributes.descricao[0].children[0].text.slice(0, 160),
        };
    } else {
        return notFound();
    }
}

export default async function BancoDeDadosPage({ params }: { params: { slug: string } }) {
    const bancoDeDados: any = await getBancoDeDados(
        params.slug,
        'populate[projetos][fields][0]=titulo&populate[projetos][fields][1]=slug&populate[projetos][populate][cover][fields]=*&populate[icon][fields]=*',
    );
    return (
        <>
            <BancoDeDados bancoDeDados={bancoDeDados.data[0]} />
        </>
    );
}
