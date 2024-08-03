import { ProjetoData } from '@/config/domain/projetos/projetos';
import { DESTAQUES_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllDestaques(query = ''): Promise<{ data: ProjetoData[] } | undefined> {
    const locale = await getLocale();
    const url = `${DESTAQUES_URL}&locale=${locale}&${query}`;
    const destaques: { data: ProjetoData[] } = await fetchJson(url);
    return destaques ? (destaques.data ? destaques : undefined) : undefined;
}
