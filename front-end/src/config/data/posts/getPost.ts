import { PostData } from '@/config/domain/posts/posts';
import { POSTS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getCertificado(slug: string | string[]): Promise<{ data: PostData } | undefined> {
    const locale = await getLocale();
    const url = `${POSTS_URL}&locale=${locale}&filters[slug][$eq]=${slug}`;
    const posts: { data: PostData } = await fetchJson(url);
    return posts ? (posts.data ? posts : undefined) : undefined;
}
