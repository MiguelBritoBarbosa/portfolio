import { footerData } from '@/config/domain/footer/footer';
import { FOOTER_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getFooter(query = ''): Promise<{ data: footerData } | undefined> {
    const locale = await getLocale();
    const url = `${FOOTER_URL}&locale=${locale}&${query}`;
    const footer: { data: footerData } = await fetchJson(url);
    return footer ? (footer.data ? footer : undefined) : undefined;
}
