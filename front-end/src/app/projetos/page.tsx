import { getAllProjetos } from '@/config/data/projetos/getAllProjetos';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import Projetos from '@/containers/Projetos';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export const revalidate = 300;

export default async function ProjetosPage() {
    const t = await getTranslations('Pages.Projects');
    const projetos: { data: ProjetoData[] } | undefined = await getAllProjetos(
        '&populate[cover][fields][0]=*&populate[autores][fields][0]=*&populate[tecnologias][populate][icon][fields][0]=*&populate[bancosDeDados][populate][icon][fields][0]=*',
    );
    if (projetos !== undefined && projetos.data.length > 0) {
        return <Projetos projetos={projetos.data} />;
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center mb-2" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No projects found!')}
            </Heading>
        </div>
    );
}
