import { meta } from '@/config/domain/meta/meta';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { PROJETOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllProjetos(query = ''): Promise<{ data: ProjetoData[]; meta: meta } | undefined> {
    const locale = await getLocale();
    const url = `${PROJETOS_URL}&locale=${locale}&${query}`;
    const destaques: { data: ProjetoData[]; meta: meta } = await fetchJson(url);
    return destaques ? (destaques.data ? destaques : undefined) : undefined;
}
