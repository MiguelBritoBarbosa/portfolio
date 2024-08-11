import { bancosDeDadosData } from '@/config/domain/bancos de dados/bancosDeDados';
import { BANCO_DE_DADOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getBancoDeDados(
    slug: string,
    query: string = '',
): Promise<{ data: bancosDeDadosData[] } | undefined> {
    const locale = await getLocale();
    const url = `${BANCO_DE_DADOS_URL}&locale=${locale}&filters[slug][$eq]=${slug}&${query}`;
    const premio: { data: bancosDeDadosData[] } = await fetchJson(url);
    return premio ? (premio.data ? premio : undefined) : undefined;
}
