import { getAllPosts } from '@/config/data/posts/getAllPosts';
import { meta } from '@/config/domain/meta/meta';
import { PostData } from '@/config/domain/posts/posts';
import Blog from '@/containers/Blog';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function BlogPage({ searchParams }: { searchParams: { query?: string; page: string } }) {
    const t = await getTranslations('Pages.Blog');
    const posts: { data: PostData[]; meta: meta } | undefined = await getAllPosts(
        `&${searchParams.page ? `pagination[page]=${searchParams.page}` : 'pagination[page]=1'}&sort[0]=createdAt:desc&populate=*&`,
    );
    if (posts !== undefined && posts.data.length > 0) {
        return (
            <Blog posts={posts.data} totalPage={posts.meta.pagination.pageCount} page={posts.meta.pagination.page} />
        );
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No posts found!')}
            </Heading>
        </div>
    );
}
