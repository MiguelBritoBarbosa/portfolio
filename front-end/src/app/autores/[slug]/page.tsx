import { getAutor } from '@/config/data/autores/getAutor';
import Autor from '@/containers/Autor';
import { getDescription } from '@/utils/getDescription';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const autor: any = await getAutor(params.slug);
    if (autor !== undefined && autor.data.length > 0) {
        return {
            title: autor.data[0].attributes.titulo,
            description: getDescription(autor.data[0].attributes.apresentacao),
        };
    } else {
        return notFound();
    }
}

export default async function AutorPage({ params }: { params: { slug: string } }) {
    const autor: any = await getAutor(
        params.slug,
        'populate[projetos][fields][0]=titulo&populate[projetos][fields][1]=slug&populate[projetos][populate][cover][fields]=*&populate[projetos][sort]=createdAt:desc&populate[foto][fields]=*&populate[curriculos][populate][documento][fields]=*&populate[experiencias][sort]=createdAt:desc&populate[experiencias][populate][cover][fields]=*&populate[posts][populate][thumbnail][fields]=*',
    );
    return (
        <>
            <Autor autor={autor.data[0]} />
        </>
    );
}
