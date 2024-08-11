import { AutorData } from '@/config/domain/autores/autores';
import { AUTOR_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAutor(slug: string, query: string = ''): Promise<{ data: AutorData } | undefined> {
    const locale = await getLocale();
    const url = `${AUTOR_URL}&locale=${locale}&filters[slug][$eq]=${slug}&${query}`;
    const autor: { data: AutorData } = await fetchJson(url);
    return autor ? (autor.data ? autor : undefined) : undefined;
}
