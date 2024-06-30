import { headerData } from '@/config/domain/header/header';
import { HEADER_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getHeader(query = ''): Promise<{ data: headerData } | undefined> {
    const locale = 'pt-BR';
    const url = `${HEADER_URL}/locale=${locale}&${query}`;
    const header: { data: headerData } = await fetchJson(url);
    return header ? (header.data ? header : undefined) : undefined;
}
