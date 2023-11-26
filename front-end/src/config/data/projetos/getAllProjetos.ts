import { ProjetoData } from '@/config/domain/projetos/projetos';
import { PROJETOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getAllProjetos(query = ''): Promise<ProjetoData[]> {
    const locale = 'pt-BR';
    const url = `${PROJETOS_URL}/locale=${locale}&${query}`;
    const destaques: ProjetoData[] = await fetchJson(url);
    return destaques;
}
