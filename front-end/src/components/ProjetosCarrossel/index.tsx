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

export const ProjetosCarrossel = async ({ projetos, sectionData, predominantColors }: ProjetosCarrosselProps) => {
    return (
        <Container className="py-8">
            <Heading as="h2" className="mb-4 text-center" size={{ initial: '6', md: '7', lg: '8' }}>
                {sectionData.metadados.nome}
            </Heading>
            <Swiper
                effect={'coverflow'}
                loop={true}
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
                    const url = `${API_ROOT}${projeto.attributes.cover.data.attributes.formats.thumbnail.url}`;
                    const width = projeto.attributes.cover.data.attributes.formats.thumbnail.width;
                    const height = projeto.attributes.cover.data.attributes.formats.thumbnail.height;
                    const predominantColor: number[] = predominantColors[index];
                    return (
                        <SwiperSlide key={`projeto:${projeto.attributes.slug}`}>
                            <div className="grid gap-3 items-start p-2 sm:p-3 rounded bg-white dark:bg-gray-950">
                                <Link
                                    className="flex justify-center items-center"
                                    href={`/projetos/${projeto.attributes.slug}`}
                                >
                                    <Image
                                        placeholder="blur"
                                        blurDataURL={rgbDataURL(
                                            predominantColor[0],
                                            predominantColor[1],
                                            predominantColor[2],
                                        )}
                                        className="img-fluid img-thumbnail"
                                        src={url}
                                        alt={projeto.attributes.titulo}
                                        width={width}
                                        height={height}
                                    />
                                </Link>
                                <h3 className="text-center">{projeto.attributes.titulo}</h3>
                                {projeto.attributes.autores !== undefined ? (
                                    <div className="mb-3">
                                        Autores:{' '}
                                        {projeto.attributes.autores.data.map((autor, index) => {
                                            return (
                                                <span
                                                    key={`${projeto.attributes.slug}autor:${autor.attributes.slug}${index}`}
                                                >
                                                    <Link href={`/autores/${autor.attributes.slug}`}>
                                                        {autor.attributes.nome}
                                                    </Link>
                                                    {index !== projeto.attributes.autores.data.length - 1 ? (
                                                        <> | </>
                                                    ) : (
                                                        <></>
                                                    )}
                                                </span>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <></>
                                )}

                                {projeto.attributes.tecnologias !== undefined ? (
                                    <div className="d-flex gap-3">
                                        <span>Tecnologias: </span>
                                        {projeto.attributes.tecnologias.data.map((tecnologia) => {
                                            const iconUrl = `${API_ROOT}${tecnologia.attributes.icon.data.attributes.url}`;
                                            return (
                                                <Link
                                                    key={`destaque${projeto.id}tecnologia${tecnologia.id}`}
                                                    href={`/tecnologias/${tecnologia.attributes.slug}`}
                                                >
                                                    <Image
                                                        className="img-fluid"
                                                        src={iconUrl}
                                                        alt={tecnologia.attributes.nome}
                                                        width={20}
                                                        height={20}
                                                    />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};
