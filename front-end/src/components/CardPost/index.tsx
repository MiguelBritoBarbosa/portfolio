import { Container } from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@radix-ui/themes';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { PostData } from '@/config/domain/posts/posts';
import { useTranslations } from 'next-intl';
import { DateFormat } from '../DateFormat';
import { getDescription } from '@/utils/getDescription';

interface UltimasPostagensProps {
    post: PostData;
    predominantColor: number[];
}

export const CardPost = ({ post, predominantColor }: UltimasPostagensProps) => {
    const t = useTranslations('Sections.LastPosts');
    let url;
    let width;
    let height;
    if (
        post.attributes.thumbnail.data.attributes.formats !== null &&
        post.attributes.thumbnail.data.attributes.formats.small !== undefined
    ) {
        url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.formats.small.url}`;
        width = post.attributes.thumbnail.data.attributes.formats.small.width;
        height = post.attributes.thumbnail.data.attributes.formats.small.height;
    } else {
        url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.url}`;
        width = post.attributes.thumbnail.data.attributes.width;
        height = post.attributes.thumbnail.data.attributes.height;
    }
    let content: string;
    if (post.attributes.descricao) {
        content = post.attributes.descricao.slice(0, 160);
    } else {
        const text: string = getDescription(post.attributes.conteudo);
        content = text + (text.length === 160 ? '...' : '');
    }
    return (
        <Container className="grid gap-1 items-start h-full grid-rows-[auto,1fr]">
            <Link className="block aspect-video" href={`/blog/${post.attributes.slug}`} title={post.attributes.titulo}>
                <Image
                    placeholder="blur"
                    blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                    className="border-1 bg-white border-gray-200 dark:bg-gray-900 rounded p-1 hover:p-0 transition-all h-full w-full object-cover"
                    src={url}
                    alt={post.attributes.titulo}
                    width={width}
                    height={height}
                />
            </Link>
            <div className="grid p-2 sm:p-3 rounded bg-white dark:bg-gray-950 h-full">
                <div className="flex flex-wrap justify-between">
                    <Text as="p" size={'2'}>
                        <DateFormat date={post.attributes.createdAt} />
                    </Text>
                    {post.attributes.autor !== undefined && (
                        <Text as="p" size={'2'} align={'right'}>
                            {t('By')}{' '}
                            <Text
                                key={`last-posts-authors-${post.attributes.autor.data.attributes.slug}`}
                                color="violet"
                                className="hover:text-[--accent-a12] transition"
                                title={post.attributes.autor.data.attributes.nome}
                            >
                                <Link href={`/autores/${post.attributes.autor.data.attributes.slug}`}>
                                    {post.attributes.autor.data.attributes.nome}{' '}
                                </Link>
                            </Text>
                        </Text>
                    )}
                </div>
                <Heading as="h3">
                    <Link
                        className="hover:text-[--accent-a9] transition"
                        href={`/blog/${post.attributes.slug}`}
                        title={post.attributes.titulo}
                    >
                        {post.attributes.titulo}
                    </Link>
                </Heading>
                <Text as="p" size={'3'}>
                    {content}
                </Text>
            </div>
        </Container>
    );
};
