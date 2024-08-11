import { getPost } from '@/config/data/posts/getPost';
import Post from '@/containers/Post';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post: any = await getPost(params.slug);
    if (post !== undefined && post.data.length > 0) {
        return {
            title: post.data[0].attributes.titulo,
            description: post.data[0].attributes.descricao.slice(0, 160),
        };
    } else {
        return notFound();
    }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post: any = await getPost(
        params.slug,
        'populate[autor][fields][0]=nome&populate[autor][fields][1]=slug&populate[autor][populate][foto][fields][0]=*&populate[thumbnail][fields]=*',
    );
    return (
        <>
            <Post post={post.data[0]} />
        </>
    );
}
