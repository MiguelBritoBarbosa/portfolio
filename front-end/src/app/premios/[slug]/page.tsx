import { getPremio } from '@/config/data/premios/getPremio';
import Premio from '@/containers/Premio';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const premio: any = await getPremio(params.slug);
    return {
        title: premio.data[0].attributes.Titulo,
        description: premio.data[0].attributes.Descricao[0].children[0].text.slice(0, 100),
    };
}

export default async function PremioPage({ params }: { params: { slug: string } }) {
    const premio: any = await getPremio(params.slug);
    console.log(premio);
    return (
        <>
            <Premio premio={premio.data[0]} />
        </>
    );
}
