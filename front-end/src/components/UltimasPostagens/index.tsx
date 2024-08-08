'use client';
import { Container } from './styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Heading } from '@radix-ui/themes';
import { PostData } from '@/config/domain/posts/posts';
import { PostsData } from '@/config/domain/pages/sections/posts';
import { CardPost } from '../CardPost';

interface UltimasPostagensProps {
    posts: PostData[];
    sectionData: PostsData;
    predominantColors: [number[]];
}

export const UltimasPostagens = ({ posts, sectionData, predominantColors }: UltimasPostagensProps) => {
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
                    const predominantColor: number[] = predominantColors[index];
                    return (
                        <SwiperSlide key={`post-${post.attributes.slug}`}>
                            <CardPost post={post} predominantColor={predominantColor} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};
