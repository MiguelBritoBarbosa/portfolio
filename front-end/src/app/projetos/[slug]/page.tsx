import { getProjeto } from '@/config/data/projetos/getProjeto';
import Projeto from '@/containers/Projeto';
import { getDescription } from '@/utils/getDescription';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const projeto: any = await getProjeto(params.slug);
    return {
        title: projeto.data[0].attributes.titulo,
        description: getDescription(projeto.data[0].attributes.descricao),
    };
}

export default async function ProjetoPage({ params }: { params: { slug: string } }) {
    const projeto: any = await getProjeto(
        params.slug,
        '&populate[cover][fields][0]=*&populate[autores][fields][0]=nome&populate[autores][fields][1]=slug&populate[autores][populate][foto][fields][0]=*&populate[tecnologias][populate][icon][fields][0]=*&populate[bancosDeDados][populate][icon][fields][0]=*',
    );
    return (
        <>
            <Projeto projeto={projeto.data[0]} />
        </>
    );
}
