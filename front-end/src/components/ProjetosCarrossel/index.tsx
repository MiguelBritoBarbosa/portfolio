'use client';
import { Container } from './styled';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@radix-ui/themes';
import { ProjectsData } from '@/config/domain/pages/sections/projects';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';

interface ProjetosCarrosselProps {
    projetos: ProjetoData[];
    sectionData: ProjectsData;
    predominantColors: [number[]];
}

export const ProjetosCarrossel = ({ projetos, sectionData, predominantColors }: ProjetosCarrosselProps) => {
    return (
        <Container className="py-8">
            <Heading as="h2" className="mb-4 text-center" size={{ initial: '6', sm: '7', md: '8' }}>
                {sectionData.metadados.nome}
            </Heading>
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="ProjetosCarrosselSwiper bg-gray-200 dark:bg-gray-800 !py-10"
            >
                {projetos.map((projeto, index) => {
                    const url = `${API_ROOT}${projeto.attributes.cover.data.attributes.formats.small.url}`;
                    const width = projeto.attributes.cover.data.attributes.formats.small.width;
                    const height = projeto.attributes.cover.data.attributes.formats.small.height;
                    const predominantColor: number[] = predominantColors[index];
                    return (
                        <SwiperSlide key={`projeto-${projeto.attributes.slug}`}>
                            <div className="grid gap-3 items-start p-2 sm:p-3 rounded bg-white dark:bg-gray-950">
                                <Link
                                    className="flex justify-center items-center"
                                    href={`/projetos/${projeto.attributes.slug}`}
                                    title={projeto.attributes.titulo}
                                >
                                    <Image
                                        placeholder="blur"
                                        blurDataURL={rgbDataURL(
                                            predominantColor[0],
                                            predominantColor[1],
                                            predominantColor[2],
                                        )}
                                        className="border-1 bg-gray-200 border-gray-200 dark:bg-gray-900 rounded p-1 hover:p-0 transition-all"
                                        src={url}
                                        alt={projeto.attributes.titulo}
                                        width={width}
                                        height={height}
                                    />
                                </Link>
                                <Heading as="h3" className="text-center" size={'4'}>
                                    <Link
                                        className="hover:text-[--accent-a9] transition"
                                        href={`/projetos/${projeto.attributes.slug}`}
                                        title={projeto.attributes.titulo}
                                    >
                                        {projeto.attributes.titulo}
                                    </Link>
                                </Heading>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};
