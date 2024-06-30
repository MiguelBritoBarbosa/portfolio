import { ProjetoData } from '@/config/domain/projetos/projetos';
import { PROJETOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getProjeto(slug: string | string[]): Promise<ProjetoData> {
    const locale = 'pt-BR';
    const url = `${PROJETOS_URL}&locale=${locale}&filters[slug][$eq]=${slug}`;
    const projeto: ProjetoData = await fetchJson(url);
    return projeto;
}
