import { TecnologiasData } from '@/config/domain/tecnologias/tecnologias';
import { TECNOLOGIAS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllTecnologias(query = ''): Promise<{ data: TecnologiasData[] } | undefined> {
    const locale = await getLocale();
    const url = `${TECNOLOGIAS_URL}&locale=${locale}&${query}`;
    const tecnologias: { data: TecnologiasData[] } = await fetchJson(url);
    return tecnologias ? (tecnologias.data ? tecnologias : undefined) : undefined;
}
