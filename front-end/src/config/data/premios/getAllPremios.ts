import { ProjetoData } from '@/config/domain/projetos/projetos';
import { PREMIOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getAllPremios(query = ''): Promise<ProjetoData[]> {
    const locale = 'pt-BR';
    const url = `${PREMIOS_URL}/locale=${locale}&${query}`;
    const premios: ProjetoData[] = await fetchJson(url);
    return premios;
}
