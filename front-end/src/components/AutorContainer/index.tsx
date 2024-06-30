'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';
// import { rgbDataURL } from '@/utils/rgbDataUrl';
// import { getPredominantColor } from '@/utils/getPredominantColor';

export interface AutorContainerProps {
    content: RootNode[];
    nome: string;
    url: string;
    width: number;
    height: number;
}

export const AutorContainer = async ({ content, nome, url, width, height }: AutorContainerProps) => {
    // const predominantColor = await getPredominantColor(url);
    return (
        <Container className="rounded bg-white p-3">
            <div className="text-center">
                <Image
                    className="img-fluid img-thumbnail mb-3"
                    // placeholder="blur"
                    // blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                    src={url}
                    alt={nome}
                    width={width}
                    height={height}
                />
            </div>
            <div className="fs-5 tw-text-justify text-break">
                {content !== null && <BlocksRenderer content={content} />}
            </div>
        </Container>
    );
};
