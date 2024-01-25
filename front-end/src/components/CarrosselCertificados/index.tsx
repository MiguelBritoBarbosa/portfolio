'use client';
import Image from 'next/image';
import { Container } from './styled';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { API_ROOT } from '@/config/siteConfig';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

interface CarrosselCertificadosProps {
    certificados: CertificadoData[];
}

export const CarrosselCertificados = ({ certificados }: CarrosselCertificadosProps) => {
    return (
        <Container className="row d-flex my-3">
            <div className="container-fluid">
                <div className="p-3">
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
                        speed={2000}
                        modules={[Autoplay]}
                        className="certificados-carousel"
                    >
                        {certificados.map((certificado: CertificadoData) => {
                            const url = `${API_ROOT}${certificado.attributes.documento.data.attributes.formats.small.url}`;
                            const width = certificado.attributes.documento.data.attributes.formats.small.width;
                            const height = certificado.attributes.documento.data.attributes.formats.small.height;
                            return (
                                <SwiperSlide
                                    key={certificado.attributes.slug}
                                    className="p-2 d-flex justify-content-center align-items-center"
                                >
                                    <Link href={`/certificados/${certificado.attributes.slug}`}>
                                        <Image
                                            className="img-fluid shadow"
                                            src={url}
                                            alt={certificado.attributes.Titulo}
                                            width={width}
                                            height={height}
                                        />
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};
