import { AutorData } from '@/config/domain/autores/autores';
import { AUTOR_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllAutores(query = ''): Promise<{ data: AutorData[] } | undefined> {
    const locale = await getLocale();
    const url = `${AUTOR_URL}&locale=${locale}&${query}`;
    const autores: { data: AutorData[] } = await fetchJson(url);
    return autores ? (autores.data ? autores : undefined) : undefined;
}
