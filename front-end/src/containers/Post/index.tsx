import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { InternalPageContainer } from '@/components/InternalPageContainer';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { InternalPageDetails } from '@/components/InternalPageDetails';
import { PostData } from '@/config/domain/posts/posts';

export interface PostProps {
    post: PostData;
}

export default async function Post({ post }: PostProps) {
    let url;
    let width;
    let height;
    if (
        post.attributes.thumbnail.data.attributes.formats !== null &&
        post.attributes.thumbnail.data.attributes.formats.large !== undefined
    ) {
        url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.formats.large.url}`;
        width = post.attributes.thumbnail.data.attributes.formats.large.width;
        height = post.attributes.thumbnail.data.attributes.formats.large.height;
    } else {
        url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.url}`;
        width = post.attributes.thumbnail.data.attributes.width;
        height = post.attributes.thumbnail.data.attributes.height;
    }
    const predominantColor: number[] = await getPredominantColor(url);
    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {post.attributes.titulo}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <InternalPageContainer
                    content={post.attributes.conteudo}
                    description={post.attributes.descricao}
                    titulo={post.attributes.titulo}
                    url={url}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                />

                <InternalPageDetails date={post.attributes.createdAt} autores={[post.attributes.autor.data]} />
            </section>
        </Container>
    );
}
