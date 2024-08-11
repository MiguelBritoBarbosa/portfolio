import { ExperienciasData } from '@/config/domain/experiencias/experiencias';
import { EXPERIENCIAS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getExperiencia(
    slug: string,
    query: string = '',
): Promise<{ data: ExperienciasData[] } | undefined> {
    const locale = await getLocale();
    const url = `${EXPERIENCIAS_URL}&locale=${locale}&filters[slug][$eq]=${slug}&${query}`;
    const experiencia: { data: ExperienciasData[] } = await fetchJson(url);
    return experiencia ? (experiencia.data ? experiencia : undefined) : undefined;
}
