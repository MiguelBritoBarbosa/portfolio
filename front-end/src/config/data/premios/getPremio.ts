import { PremioData } from '@/config/domain/premios/premios';
import { PREMIOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getPremio(slug: string | string[]): Promise<PremioData> {
    const locale = 'pt-BR';
    const url = `${PREMIOS_URL}&locale=${locale}&filters[slug][$eq]=${slug}`;
    const premio: PremioData = await fetchJson(url);
    return premio;
}
