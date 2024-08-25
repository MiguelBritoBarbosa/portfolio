import { getBancoDeDados } from '@/config/data/bancoDeDados/getBancoDeDados';
import BancoDeDados from '@/containers/BancoDeDados';
import { getDescription } from '@/utils/getDescription';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const bancoDeDados: any = await getBancoDeDados(params.slug);
    if (bancoDeDados !== undefined && bancoDeDados.data.length > 0) {
        return {
            title: bancoDeDados.data[0].attributes.titulo,
            description: getDescription(bancoDeDados.data[0].attributes.descricao),
        };
    } else {
        const t = await getTranslations('Pages');
        return {
            title: t('Page not found!'),
            description: t('Page not found!'),
        };
    }
}

export default async function BancoDeDadosPage({ params }: { params: { slug: string } }) {
    const bancoDeDados: any = await getBancoDeDados(
        params.slug,
        'populate[projetos][fields][0]=titulo&populate[projetos][fields][1]=slug&populate[projetos][populate][cover][fields]=*&populate[icon][fields]=*',
    );
    if (bancoDeDados !== undefined && bancoDeDados.data.length > 0) {
        return (
            <>
                <BancoDeDados bancoDeDados={bancoDeDados.data[0]} />
            </>
        );
    } else {
        return notFound();
    }
}
