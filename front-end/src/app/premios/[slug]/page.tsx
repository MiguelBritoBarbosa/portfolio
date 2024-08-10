import { getPremio } from '@/config/data/premios/getPremio';
import Premio from '@/containers/Premio';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const premio: any = await getPremio(params.slug);
    if (premio !== undefined && premio.data.length > 0) {
        return {
            title: premio.data[0].attributes.titulo,
            description: premio.data[0].attributes.descricao[0].children[0].text.slice(0, 160),
        };
    } else {
        return notFound();
    }
}

export default async function PremioPage({ params }: { params: { slug: string } }) {
    const premio: any = await getPremio(
        params.slug,
        'populate[autor][fields][0]=nome&populate[autor][fields][1]=slug&populate[autor][populate][foto][fields][0]=*&populate[cover][fields]=*',
    );
    return (
        <>
            <Premio premio={premio.data[0]} />
        </>
    );
}
