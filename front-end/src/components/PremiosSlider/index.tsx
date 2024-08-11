'use client';
import { Container } from './styled';
import { PremioData } from '@/config/domain/premios/premios';
import { API_ROOT } from '@/config/siteConfig';
import { useState } from 'react';
import { Heading } from '@radix-ui/themes';
import { AwardsData } from '@/config/domain/pages/sections/awards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CardPremio } from '../CardPremio';

interface PremiosSliderProps {
    premios: PremioData[];
    predominantColors: [number[]];
    sectionData: AwardsData;
}

export const PremiosSlider = ({ premios, sectionData, predominantColors }: PremiosSliderProps) => {
    const url = premios[0].attributes.cover.data.attributes.url;
    const [backgroundImage, setBackgroundImage] = useState(url);

    const changeBackground = (target: SwiperType) => {
        const url = premios[target.activeIndex].attributes.cover.data.attributes.url;
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
                    size={{ initial: '6', sm: '7', md: '8' }}
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
                    className="awardsSwiper container"
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
                        return (
                            <SwiperSlide
                                key={`awards-section-premio-${premio.attributes.slug}`}
                                className="!flex justify-center p-2"
                            >
                                <CardPremio premio={premio} predominantColor={predominantColors[index]} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </Container>
    );
};
