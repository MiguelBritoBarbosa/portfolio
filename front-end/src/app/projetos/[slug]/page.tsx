import { getProjeto } from '@/config/data/projetos/getProjeto';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import Projeto from '@/containers/Projeto';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const projetoData: any = await getProjeto(params.slug);
    const projeto: ProjetoData = projetoData.data[0];
    return {
        title: projeto.attributes.Titulo,
        description: projeto.attributes.Descricao[0].children[0].text.slice(0, 100),
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
