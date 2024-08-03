import { ProjetoData } from '@/config/domain/projetos/projetos';
import { PROJETOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getProjeto(slug: string | string[]): Promise<{ data: ProjetoData } | undefined> {
    const locale = await getLocale();
    const url = `${PROJETOS_URL}&locale=${locale}&filters[slug][$eq]=${slug}`;
    const projeto: { data: ProjetoData } = await fetchJson(url);
    return projeto ? (projeto.data ? projeto : undefined) : undefined;
}
