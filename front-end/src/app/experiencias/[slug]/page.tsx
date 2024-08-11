import { getExperiencia } from '@/config/data/experiencias/getExperiencia';
import Experiencia from '@/containers/Experiencia';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const experiencia: any = await getExperiencia(params.slug);
    if (experiencia !== undefined && experiencia.data.length > 0) {
        return {
            title: experiencia.data[0].attributes.titulo,
            description: experiencia.data[0].attributes.descricao[0].children[0].text.slice(0, 160),
        };
    } else {
        return notFound();
    }
}

export default async function ExperienciaPage({ params }: { params: { slug: string } }) {
    const experiencia: any = await getExperiencia(
        params.slug,
        'populate[autor][fields][0]=nome&populate[autor][fields][1]=slug&populate[autor][populate][foto][fields][0]=*&populate[cover][fields]=*',
    );
    return (
        <>
            <Experiencia experiencia={experiencia.data[0]} />
        </>
    );
}
