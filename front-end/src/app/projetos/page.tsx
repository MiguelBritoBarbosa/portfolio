import { getAllProjetos } from '@/config/data/projetos/getAllProjetos';
import { meta } from '@/config/domain/meta/meta';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import Projetos from '@/containers/Projetos';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function ProjetosPage({ searchParams }: { searchParams: { query?: string; page: string } }) {
    const t = await getTranslations('Pages.Projects');
    console.log(searchParams);
    const projetos: { data: ProjetoData[]; meta: meta } | undefined = await getAllProjetos(
        `&${searchParams.page ? `pagination[page]=${searchParams.page}` : 'pagination[page]=1'}&pagination[pageSize]=24&sort[0]=destaque:desc&sort[1]=createdAt:desc&populate[cover][fields][0]=*&populate[autores][fields][0]=*&populate[tecnologias][populate][icon][fields][0]=*&populate[bancosDeDados][populate][icon][fields][0]=*`,
    );
    if (projetos !== undefined && projetos.data.length > 0) {
        return (
            <Projetos
                projetos={projetos.data}
                totalPage={projetos.meta.pagination.pageCount}
                page={projetos.meta.pagination.page}
            />
        );
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No projects found!')}
            </Heading>
        </div>
    );
}
