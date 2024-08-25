import { getPost } from '@/config/data/posts/getPost';
import Post from '@/containers/Post';
import { getDescription } from '@/utils/getDescription';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post: any = await getPost(params.slug);
    if (post !== undefined && post.data.length > 0) {
        return {
            title: post.data[0].attributes.titulo,
            description: !post.data[0].attributes.descricao
                ? getDescription(post.data[0].attributes.conteudo)
                : post.data[0].attributes.descricao,
        };
    } else {
        const t = await getTranslations('Pages');
        return {
            title: t('Page not found!'),
            description: t('Page not found!'),
        };
    }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post: any = await getPost(
        params.slug,
        'populate[autor][fields][0]=nome&populate[autor][fields][1]=slug&populate[autor][populate][foto][fields][0]=*&populate[thumbnail][fields]=*',
    );
    if (post !== undefined && post.data.length > 0) {
        return (
            <>
                <Post post={post.data[0]} />
            </>
        );
    } else {
        return notFound();
    }
}
