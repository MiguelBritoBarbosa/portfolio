'use client';
import Image from 'next/image';
import { Container } from './styled';
import { PremioData } from '@/config/domain/premios/premios';
import { API_ROOT } from '@/config/siteConfig';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface PremiosSliderProps {
    premios: PremioData[];
}

export const PremiosSlider = ({ premios }: PremiosSliderProps) => {
    const [backgroundImage, setBackgroundImage] = useState(
        premios[0].attributes.cover.data.attributes.formats.large.url,
    );
    const [carouselItens]: any = useState([]);
    useEffect(() => {
        carouselItens.map((item: any) => {
            const div: any = document.getElementById(item.props.id);
            const observer = new MutationObserver((mutation) => {
                const target: any = mutation[0].target;
                if (target.classList.contains('active')) {
                    premios.map((premio) => {
                        if (premio.attributes.slug === target.id) {
                            setBackgroundImage(premio.attributes.cover.data.attributes.formats.large.url);
                        }
                    });
                }
            });
            observer.observe(div, { attributes: true });
        });
    }, [carouselItens, premios]);

    return (
        <Container
            className="rounded my-5"
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
                className=" mb-5 d-flex justify-content-center p-4"
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
                            const slide = (
                                <div
                                    key={premio.attributes.slug}
                                    id={premio.attributes.slug}
                                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                >
                                    <Image
                                        className="d-md-block img-fluid"
                                        src={`${API_ROOT}${premio.attributes.cover.data.attributes.formats.medium.url}`}
                                        alt={premio.attributes.slug}
                                        width={premio.attributes.cover.data.attributes.formats.medium.width}
                                        height={premio.attributes.cover.data.attributes.formats.medium.height}
                                    />
                                    <div className="bg-light rounded carousel-caption d-none d-md-block">
                                        <h5 className="fs-5">{premio.attributes.Titulo}</h5>
                                        <p className="fw-bold">
                                            <div className="d-flex px-1">
                                                <span className="d-block text-start text-truncate">
                                                    <BlocksRenderer content={premio.attributes.Descricao} />
                                                </span>
                                                <span className="d-flex align-items-end">...</span>
                                            </div>
                                        </p>
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
