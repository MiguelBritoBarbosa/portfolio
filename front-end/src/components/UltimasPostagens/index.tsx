'use client';
import { Container } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@radix-ui/themes';
import { ProjectsData } from '@/config/domain/pages/sections/projects';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { PostData } from '@/config/domain/posts/posts';
import { useTranslations } from 'next-intl';
import { DateFormat } from '../DateFormat';

interface UltimasPostagensProps {
    posts: PostData[];
    sectionData: ProjectsData;
    predominantColors: [number[]];
}

export const UltimasPostagens = ({ posts, sectionData, predominantColors }: UltimasPostagensProps) => {
    const t = useTranslations('Sections.LastPosts');
    return (
        <Container className="py-8">
            <Heading as="h2" className="mb-4 text-center" size={{ initial: '6', sm: '7', md: '8' }}>
                {sectionData.metadados.nome}
            </Heading>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    420: {
                        slidesPerView: 1.2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2.3,
                    },
                    1024: {
                        slidesPerView: 3.3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                pagination={true}
                modules={[Pagination]}
                className="ProjetosCarrosselSwiper bg-gray-200 dark:bg-gray-800 !py-10 !px-2"
            >
                {posts.map((post, index) => {
                    const url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.formats.small.url}`;
                    const width = post.attributes.thumbnail.data.attributes.formats.small.width;
                    const height = post.attributes.thumbnail.data.attributes.formats.small.height;
                    const predominantColor: number[] = predominantColors[index];
                    let content: string;
                    if (post.attributes.descricao) {
                        content = post.attributes.descricao;
                    } else {
                        const text: any = post.attributes.conteudo[0].children[0];
                        content = text.split(' ').splice(0, 20).join(' ') + text.split(' ').length > 42 ? '...' : '';
                    }

                    return (
                        <SwiperSlide key={`post-${post.attributes.slug}`}>
                            <div className="grid gap-1 items-start">
                                <Link
                                    className="block aspect-video"
                                    href={`/posts/${post.attributes.slug}`}
                                    title={post.attributes.titulo}
                                >
                                    <Image
                                        placeholder="blur"
                                        blurDataURL={rgbDataURL(
                                            predominantColor[0],
                                            predominantColor[1],
                                            predominantColor[2],
                                        )}
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
                                                        <Link href={`/autores/${autor.attributes.slug}`}>
                                                            {autor.attributes.nome}{' '}
                                                        </Link>
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
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};
