'use client';
import Image from 'next/image';
import { Container } from './styled';
import { PremioData } from '@/config/domain/premios/premios';
import { API_ROOT } from '@/config/siteConfig';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { rgbDataURL } from '@/utils/rgbDataUrl';

interface PremiosSliderProps {
    premios: PremioData[];
    predominantColors: [number[]];
}

export const PremiosSlider = ({ premios, predominantColors }: PremiosSliderProps) => {
    const url = premios[0].attributes.cover.data.attributes.formats.large
        ? premios[0].attributes.cover.data.attributes.formats.large.url
        : premios[0].attributes.cover.data.attributes.url;
    const [backgroundImage, setBackgroundImage] = useState(url);
    const [carouselItens]: any = useState([]);
    useEffect(() => {
        carouselItens.map((item: any) => {
            const div: any = document.getElementById(item.props.id);
            const observer = new MutationObserver((mutation) => {
                const target: any = mutation[0].target;
                if (target.classList.contains('active')) {
                    premios.map((premio) => {
                        if (premio.attributes.slug === target.id) {
                            const url = premios[0].attributes.cover.data.attributes.formats.large
                                ? premios[0].attributes.cover.data.attributes.formats.large.url
                                : premios[0].attributes.cover.data.attributes.url;
                            setBackgroundImage(url);
                        }
                    });
                }
            });
            observer.observe(div, { attributes: true });
        });
    });

    return (
        <Container
            className="row my-5"
            style={{
                backgroundImage: `url(${API_ROOT}${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maxHeight: '800px',
            }}
        >
            <div
                id="carousel-container"
                className=" d-flex justify-content-center p-4"
                style={{ backdropFilter: 'blur(10px)' }}
            >
                <div id="carousel" className=" carousel slide carousel-dark" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {premios.map((premio, index) => {
                            return (
                                <button
                                    key={index}
                                    className="active"
                                    type="button"
                                    data-bs-target="#carousel"
                                    data-bs-slide-to={index}
                                    aria-current="true"
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            );
                        })}
                    </div>
                    <div className="carousel-inner rounded-3">
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
                            const slide = (
                                <div
                                    key={premio.attributes.slug}
                                    id={premio.attributes.slug}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                >
                                    <Image
                                        className="d-md-block img-fluid"
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
                                    <div className="bg-light rounded carousel-caption d-none d-md-block">
                                        <h5 className="fs-5">{premio.attributes.titulo}</h5>
                                        <div className="fw-bold mb-3">
                                            <div className="d-flex px-1">
                                                <span className="d-block tw-text-justify">
                                                    {description.text.split(' ').splice(0, 15).join(' ')}
                                                    {description.text.split(' ').length > 15 ? <>...</> : <></>}
                                                </span>
                                            </div>
                                        </div>
                                        <Link href={`/premios/${premio.attributes.slug}`} className="btn btn-primary">
                                            Veja Mais
                                        </Link>
                                    </div>
                                    <div className="carousel-caption d-block d-md-none fs-1">
                                        <Link
                                            className="text-decoration-underline ver-mais"
                                            href={`/premios/${premio.attributes.slug}`}
                                        >
                                            Acesse
                                        </Link>
                                    </div>
                                </div>
                            );
                            carouselItens.push(slide);
                            return slide;
                        })}
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </Container>
    );
};
