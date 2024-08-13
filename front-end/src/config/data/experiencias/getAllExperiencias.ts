import { ExperienciasData } from '@/config/domain/experiencias/experiencias';
import { EXPERIENCIAS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllExperiencias(query = ''): Promise<{ data: ExperienciasData[] } | undefined> {
    const locale = await getLocale();
    const url = `${EXPERIENCIAS_URL}&locale=${locale}&${query}`;
    const experiencias: { data: ExperienciasData[] } = await fetchJson(url);
    return experiencias ? (experiencias.data ? experiencias : undefined) : undefined;
}
