'use client';
import Image from 'next/image';
import { Container } from './styled';
import { PremioData } from '@/config/domain/premios/premios';
import { API_ROOT } from '@/config/siteConfig';
import { useState } from 'react';
import Link from 'next/link';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { Button, Heading } from '@radix-ui/themes';
import { AwardsData } from '@/config/domain/pages/sections/awards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface PremiosSliderProps {
    premios: PremioData[];
    predominantColors: [number[]];
    sectionData: AwardsData;
}

export const PremiosSlider = ({ premios, predominantColors, sectionData }: PremiosSliderProps) => {
    const t = useTranslations('Sections.Awards');
    const url = premios[0].attributes.cover.data.attributes.formats.large
        ? premios[0].attributes.cover.data.attributes.formats.large.url
        : premios[0].attributes.cover.data.attributes.url;
    const [backgroundImage, setBackgroundImage] = useState(url);

    const changeBackground = (target: SwiperType) => {
        const url = premios[target.activeIndex].attributes.cover.data.attributes.formats.large
            ? premios[target.activeIndex].attributes.cover.data.attributes.formats.large.url
            : premios[target.activeIndex].attributes.cover.data.attributes.url;
        setBackgroundImage(url);
    };

    return (
        <Container
            style={{
                backgroundImage: `url(${API_ROOT}${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="transition-all"
        >
            <div className="py-8 backdrop-blur-md">
                <Heading
                    as="h2"
                    color="violet"
                    className="mb-4 text-center bg-gray-200 dark:bg-gray-800 rounded mx-auto w-min p-1"
                >
                    {sectionData.metadados.nome}
                </Heading>
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="awardsSwiper"
                    onSlideChange={function (this: any) {
                        changeBackground(this);
                    }}
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 4000,
                    }}
                >
                    {premios.map((premio, index) => {
                        const description: any = premio.attributes.descricao[0].children[0];
                        const url = `${API_ROOT}${premio.attributes.cover.data.attributes.formats.medium ? premio.attributes.cover.data.attributes.formats.medium.url : premio.attributes.cover.data.attributes.url}`;
                        const predominantColor: number[] = predominantColors[index];
                        const width = premio.attributes.cover.data.attributes.formats.medium
                            ? premio.attributes.cover.data.attributes.formats.medium.width
                            : premio.attributes.cover.data.attributes.width;
                        const height = premio.attributes.cover.data.attributes.formats.medium
                            ? premio.attributes.cover.data.attributes.formats.medium.height
                            : premio.attributes.cover.data.attributes.height;
                        return (
                            <SwiperSlide key={premio.attributes.slug} className="!flex justify-center p-2">
                                <div
                                    className="grid border bg-gray-200 dark:bg-gray-800 border-1 border-gray-300 rounded"
                                    style={{ maxWidth: width }}
                                >
                                    <Link href={`/premios/${premio.attributes.slug}`}>
                                        <Image
                                            src={url}
                                            placeholder="blur"
                                            blurDataURL={rgbDataURL(
                                                predominantColor[0],
                                                predominantColor[1],
                                                predominantColor[2],
                                            )}
                                            alt={premio.attributes.slug}
                                            width={width}
                                            height={height}
                                        />
                                    </Link>

                                    <div className="p-4 md:p-6">
                                        <h5 className="fs-5">{premio.attributes.titulo}</h5>
                                        <div className="fw-bold mb-3">
                                            <div className="d-flex px-1">
                                                <span className="d-block tw-text-justify">
                                                    {description.text.split(' ').splice(0, 24).join(' ')}
                                                    {description.text.split(' ').length > 24 ? <>...</> : <></>}
                                                </span>
                                            </div>
                                        </div>
                                        <Button color="violet">
                                            <Link href={`/premios/${premio.attributes.slug}`}>{t('See more')}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </Container>
    );
};
