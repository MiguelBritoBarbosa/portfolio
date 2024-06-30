import { getProjeto } from '@/config/data/projetos/getProjeto';
import Projeto from '@/containers/Projeto';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const projeto: any = await getProjeto(params.slug);
    return {
        title: projeto.data[0].attributes.Titulo,
        description: projeto.data[0].attributes.descricao[0].children[0].text.slice(0, 100),
    };
}

export default async function ProjetoPage({ params }: { params: { slug: string } }) {
    const projeto: any = await getProjeto(params.slug);
    return (
        <>
            <Projeto projeto={projeto.data[0]} />
        </>
    );
}
