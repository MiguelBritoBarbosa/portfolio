import { Container } from './styled';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@radix-ui/themes';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { PostData } from '@/config/domain/posts/posts';
import { useTranslations } from 'next-intl';
import { DateFormat } from '../DateFormat';

interface UltimasPostagensProps {
    post: PostData;
    predominantColor: number[];
}

export const CardPost = ({ post, predominantColor }: UltimasPostagensProps) => {
    const t = useTranslations('Sections.LastPosts');
    const url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.formats.small.url}`;
    const width = post.attributes.thumbnail.data.attributes.formats.small.width;
    const height = post.attributes.thumbnail.data.attributes.formats.small.height;
    let content: string;
    if (post.attributes.descricao) {
        content = post.attributes.descricao;
    } else {
        const text: any = post.attributes.conteudo[0].children[0];
        content = text.split(' ').splice(0, 20).join(' ') + text.split(' ').length > 42 ? '...' : '';
    }
    return (
        <Container className="grid gap-1 items-start">
            <Link className="block aspect-video" href={`/posts/${post.attributes.slug}`} title={post.attributes.titulo}>
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
            <div className="grid p-2 sm:p-3 rounded bg-white dark:bg-gray-950">
                <div className="flex flex-wrap justify-between">
                    <Text as="p" size={'2'}>
                        <DateFormat date={post.attributes.createdAt} />
                    </Text>
                    <Text as="p" size={'2'} align={'right'}>
                        {t('By')}{' '}
                        {post.attributes.autores.data.map((autor) => {
                            return (
                                <Text
                                    key={`last-posts-authors-${autor.attributes.slug}`}
                                    color="violet"
                                    className="hover:text-[--accent-a12] transition"
                                    title={autor.attributes.nome}
                                >
                                    <Link href={`/autores/${autor.attributes.slug}`}>{autor.attributes.nome} </Link>
                                </Text>
                            );
                        })}
                    </Text>
                </div>
                <Heading as="h3">
                    <Link
                        className="hover:text-[--accent-a9] transition"
                        href={`/posts/${post.attributes.slug}`}
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
