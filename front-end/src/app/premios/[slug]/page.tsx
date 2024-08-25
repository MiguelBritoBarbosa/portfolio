import { getPremio } from '@/config/data/premios/getPremio';
import Premio from '@/containers/Premio';
import { getDescription } from '@/utils/getDescription';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const premio: any = await getPremio(params.slug);
    if (premio !== undefined && premio.data.length > 0) {
        return {
            title: premio.data[0].attributes.titulo,
            description: getDescription(premio.data[0].attributes.descricao),
        };
    } else {
        const t = await getTranslations('Pages');
        return {
            title: t('Page not found!'),
            description: t('Page not found!'),
        };
    }
}

export default async function PremioPage({ params }: { params: { slug: string } }) {
    const premio: any = await getPremio(
        params.slug,
        'populate[autor][fields][0]=nome&populate[autor][fields][1]=slug&populate[autor][populate][foto][fields][0]=*&populate[cover][fields]=*',
    );
    if (premio !== undefined && premio.data.length > 0) {
        return (
            <>
                <Premio premio={premio.data[0]} />
            </>
        );
    } else {
        return notFound();
    }
}
