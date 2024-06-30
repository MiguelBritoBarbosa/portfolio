import { DataUndefined } from '@/config/domain/dataUndefined';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { PROJETOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getAllProjetos(query = ''): Promise<ProjetoData[] | DataUndefined> {
    const locale = 'pt-BR';
    const url = `${PROJETOS_URL}&locale=${locale}&${query}`;
    const destaques: ProjetoData[] = await fetchJson(url);
    return destaques ? destaques : { data: [undefined] };
}
