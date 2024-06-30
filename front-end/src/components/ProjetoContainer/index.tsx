'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';
// import { getPredominantColor } from '@/utils/getPredominantColor';
// import { rgbDataURL } from '@/utils/rgbDataUrl';

export interface ProjetoContainerProps {
    content: RootNode[];
    titulo: string;
    url: string;
    width: number;
    height: number;
    destaque: boolean;
}

export const ProjetoContainer = async ({ content, titulo, url, width, height, destaque }: ProjetoContainerProps) => {
    // const predominantColor = await getPredominantColor(url);
    return (
        <Container className="rounded bg-white p-3">
            {destaque === true && (
                <div className="container-fluid mb-2 ">
                    <span className="d-flex justify-content-end ">
                        <div className="gold rounded-pill">⭐Projeto Destaque⭐</div>
                    </span>
                </div>
            )}

            <div className="text-center">
                <Image
                    className="img-fluid img-thumbnail mb-3"
                    // placeholder="blur"
                    // blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                    src={url}
                    alt={titulo}
                    width={width}
                    height={height}
                />
            </div>
            <div className="fs-5 tw-text-justify text-break">
                <BlocksRenderer content={content} />
            </div>
        </Container>
    );
};
