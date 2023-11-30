import { getAutor } from '@/config/data/autores/getAutor';
import Autor from '@/containers/Autor';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const autor: any = await getAutor(params.slug);
    let description: string = '';
    if (autor.data[0].attributes.Apresentacao) {
        description = autor.data[0].attributes.Apresentacao[0].children[0].text.slice(0, 100);
    }
    return {
        title: autor.data[0].attributes.Titulo,
        description: description,
    };
}

export default async function AutorPage({ params }: { params: { slug: string } }) {
    const autor: any = await getAutor(params.slug);
    return (
        <>
            <Autor autor={autor.data[0]} />
        </>
    );
}
