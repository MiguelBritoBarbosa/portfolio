'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import Image from 'next/image';
import Link from 'next/link';
import { ProjetoData } from '@/config/domain/projetos/projetos';

interface CarrosselProps {
    projetos: ProjetoData[];
    predominantColors: [number[]];
}

export const Carrossel = ({ projetos, predominantColors }: CarrosselProps) => {
    return (
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
                '576': {
                    slidesPerView: 2,
                },
                '768': {
                    slidesPerView: 3,
                },
                '992': {
                    slidesPerView: 4,
                },
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="ProjetosCarrossel"
        >
            {projetos.map((projeto, index) => {
                const url = `${API_ROOT}${projeto.attributes.cover.data.attributes.formats.thumbnail.url}`;
                const width = projeto.attributes.cover.data.attributes.formats.thumbnail.width;
                const height = projeto.attributes.cover.data.attributes.formats.thumbnail.height;
                const predominantColor: number[] = predominantColors[index];
                return (
                    <SwiperSlide key={`projeto:${projeto.attributes.slug}`}>
                        <div className="container p-3 rounded bg-white">
                            <Link
                                className="m-0 text-decoration-none text-reset"
                                href={`/projetos/${projeto.attributes.slug}`}
                            >
                                <div className="d-flex justify-content-center">
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
                                </div>
                                <h3 className="text-center">{projeto.attributes.titulo}</h3>
                            </Link>
                            {projeto.attributes.autores.data.length > 0 ? (
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

                            {projeto.attributes.tecnologias.data.length > 0 ? (
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
    );
};
