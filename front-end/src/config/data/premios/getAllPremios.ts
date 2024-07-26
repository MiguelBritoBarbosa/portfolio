import { PremioData } from '@/config/domain/premios/premios';
import { PREMIOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllPremios(query = ''): Promise<{ data: PremioData[] } | undefined> {
    const locale = await getLocale();
    const url = `${PREMIOS_URL}&locale=${locale}&${query}`;
    const premios: { data: PremioData[] } = await fetchJson(url);
    return premios ? (premios.data ? premios : undefined) : undefined;
}
