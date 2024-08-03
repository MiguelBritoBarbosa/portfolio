'use client';
import { Container } from './styled';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { CertificatesData } from '@/config/domain/pages/sections/certificates';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { rgbDataURL } from '@/utils/rgbDataUrl';

interface CarrosselCertificadosProps {
    certificados: CertificadoData[];
    sectionData: CertificatesData;
    predominantColors: [number[]];
}

export const CarrosselCertificados = ({ certificados, sectionData, predominantColors }: CarrosselCertificadosProps) => {
    return (
        <Container className="py-8">
            <Heading as="h2" className="mb-4 text-center" size={{ initial: '6', md: '7', lg: '8' }}>
                {sectionData.metadados.nome}
            </Heading>
            <Swiper
                loop={true}
                slidesPerView={1}
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
                    1280: {
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
                className="certificadosCarouselSwiper bg-gray-200 dark:bg-gray-800"
            >
                {certificados.map((certificado: CertificadoData, index) => {
                    const url = `${API_ROOT}${certificado.attributes.documento.data.attributes.formats.small.url}`;
                    const width = certificado.attributes.documento.data.attributes.formats.small.width;
                    const height = certificado.attributes.documento.data.attributes.formats.small.height;
                    const predominantColor: number[] = predominantColors[index];
                    return (
                        <SwiperSlide key={certificado.attributes.slug} className="p-2 flex justify-center items-center">
                            <Link href={`/certificados/${certificado.attributes.slug}`}>
                                <Image
                                    className="shadow"
                                    src={url}
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL(
                                        predominantColor[0],
                                        predominantColor[1],
                                        predominantColor[2],
                                    )}
                                    alt={certificado.attributes.titulo}
                                    width={width}
                                    height={height}
                                />
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Container>
    );
};
