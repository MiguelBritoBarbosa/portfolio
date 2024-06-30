'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import Image from 'next/image';
import Link from 'next/link';
import { CertificadoData } from '@/config/domain/certificados/certificados';

interface CarrosselProps {
    certificados: CertificadoData[];
    predominantColors: [number[]];
}

export const Carrossel = ({ certificados, predominantColors }: CarrosselProps) => {
    return (
        <Swiper
            loop={true}
            slidesPerView={1}
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
                '1200': {
                    slidesPerView: 5,
                },
            }}
            spaceBetween={30}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            speed={3000}
            modules={[Autoplay]}
            className="certificados-carousel"
        >
            {certificados.map((certificado: CertificadoData, index) => {
                const url = `${API_ROOT}${certificado.attributes.documento.data.attributes.formats.small.url}`;
                const width = certificado.attributes.documento.data.attributes.formats.small.width;
                const height = certificado.attributes.documento.data.attributes.formats.small.height;
                const predominantColor: number[] = predominantColors[index];
                return (
                    <SwiperSlide
                        key={certificado.attributes.slug}
                        className="p-2 d-flex justify-content-center align-items-center"
                    >
                        <Link href={`/certificados/${certificado.attributes.slug}`}>
                            <Image
                                className="img-fluid shadow"
                                src={url}
                                placeholder="blur"
                                blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                                alt={certificado.attributes.titulo}
                                width={width}
                                height={height}
                            />
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
