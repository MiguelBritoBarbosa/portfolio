import { getTecnologia } from '@/config/data/tecnologias/getTecnologia';
import Tecnologia from '@/containers/Tecnologia';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const tecnologia: any = await getTecnologia(params.slug);
    if (tecnologia !== undefined && tecnologia.data.length > 0) {
        return {
            title: tecnologia.data[0].attributes.titulo,
            description: tecnologia.data[0].attributes.descricao[0].children[0].text.slice(0, 160),
        };
    } else {
        return notFound();
    }
}

export default async function TecnologiaPage({ params }: { params: { slug: string } }) {
    const tecnologia: any = await getTecnologia(
        params.slug,
        'populate[projetos][fields][0]=titulo&populate[projetos][fields][1]=slug&populate[projetos][populate][cover][fields]=*&populate[icon][fields]=*',
    );
    return (
        <>
            <Tecnologia tecnologia={tecnologia.data[0]} />
        </>
    );
}
