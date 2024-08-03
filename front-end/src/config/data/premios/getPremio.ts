import { PremioData } from '@/config/domain/premios/premios';
import { PREMIOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getPremio(slug: string | string[]): Promise<{ data: PremioData } | undefined> {
    const locale = await getLocale();
    const url = `${PREMIOS_URL}&locale=${locale}&filters[slug][$eq]=${slug}`;
    const premio: { data: PremioData } = await fetchJson(url);
    return premio ? (premio.data ? premio : undefined) : undefined;
}
