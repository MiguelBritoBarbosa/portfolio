import { getExperiencia } from '@/config/data/experiencias/getExperiencia';
import Experiencia from '@/containers/Experiencia';
import { getDescription } from '@/utils/getDescription';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const experiencia: any = await getExperiencia(params.slug);
    if (experiencia !== undefined && experiencia.data.length > 0) {
        return {
            title: experiencia.data[0].attributes.titulo,
            description: getDescription(experiencia.data[0].attributes.descricao),
        };
    } else {
        const t = await getTranslations('Pages');
        return {
            title: t('Page not found!'),
            description: t('Page not found!'),
        };
    }
}

export default async function ExperienciaPage({ params }: { params: { slug: string } }) {
    const experiencia: any = await getExperiencia(
        params.slug,
        'populate[autor][fields][0]=nome&populate[autor][fields][1]=slug&populate[autor][populate][foto][fields][0]=*&populate[cover][fields]=*',
    );
    if (experiencia !== undefined && experiencia.data.length > 0) {
        return (
            <>
                <Experiencia experiencia={experiencia.data[0]} />
            </>
        );
    } else {
        return notFound();
    }
}
