import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { Container } from './styled';
import { PostData } from '@/config/domain/posts/posts';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { API_ROOT } from '@/config/siteConfig';
import { CardPost } from '@/components/CardPost';

interface BlogProps {
    posts: PostData[];
}

export default async function Blog({ posts }: BlogProps) {
    const t = await getTranslations('Pages.Blog');
    return (
        <Container>
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('My personal blog')}
            </Heading>
            <section className="container mx-auto py-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4 gap-4 rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                {posts.map(async (post) => {
                    const url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.formats.small ? post.attributes.thumbnail.data.attributes.formats.small.url : post.attributes.thumbnail.data.attributes.url}`;
                    const predominantColor: number[] = await getPredominantColor(url);
                    return (
                        <CardPost
                            key={`post-blog-${post.attributes.slug}`}
                            post={post}
                            predominantColor={predominantColor}
                        />
                    );
                })}
            </section>
        </Container>
    );
}
