import { AutorData } from '@/config/domain/autores/autores';
import { AUTOR_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getAutor(slug: string | string[]): Promise<AutorData> {
    const locale = 'pt-BR';
    const url = `${AUTOR_URL}/locale=${locale}&filters[slug][$eq]=${slug}`;
    const autor: AutorData = await fetchJson(url);
    return autor;
}
