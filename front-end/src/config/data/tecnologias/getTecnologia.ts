import { TecnologiasData } from '@/config/domain/tecnologias/tecnologias';
import { TECNOLOGIAS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getTecnologia(
    slug: string,
    query: string = '',
): Promise<{ data: TecnologiasData[] } | undefined> {
    const locale = await getLocale();
    const url = `${TECNOLOGIAS_URL}&locale=${locale}&filters[slug][$eq]=${slug}&${query}`;
    const premio: { data: TecnologiasData[] } = await fetchJson(url);
    return premio ? (premio.data ? premio : undefined) : undefined;
}
