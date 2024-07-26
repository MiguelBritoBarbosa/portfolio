import { PageData } from '@/config/domain/pages/pages';
import { LANDING_PAGE_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getPage(slug: string | string[]): Promise<{ data: PageData[] } | undefined> {
    const locale = await getLocale();
    let url: string;
    switch (slug) {
        case 'landing-page':
            url = `${LANDING_PAGE_URL}locale=${locale}`;
            break;
        default:
            url = '';
            break;
    }
    const page: { data: PageData[] } = await fetchJson(url);
    return page ? (page.data ? page : undefined) : undefined;
}
