import { getAllPosts } from '@/config/data/posts/getAllPosts';
import { PostData } from '@/config/domain/posts/posts';
import Blog from '@/containers/Blog';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function BlogPage() {
    const t = await getTranslations('Pages.Blog');
    const posts: { data: PostData[] } | undefined = await getAllPosts('populate=*&');
    if (posts !== undefined && posts.data.length > 0) {
        return <Blog posts={posts.data} />;
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No posts found!')}
            </Heading>
        </div>
    );
}
