import { ProjetoData } from '@/config/domain/projetos/projetos';
import { DESTAQUES_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getAllDestaques(query = ''): Promise<ProjetoData[]> {
    const locale = 'pt-BR';
    const url = `${DESTAQUES_URL}/locale=${locale}&${query}`;
    const destaques: ProjetoData[] = await fetchJson(url);
    return destaques;
}
