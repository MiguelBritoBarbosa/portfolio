'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';
import { rgbDataURL } from '@/utils/rgbDataUrl';

export interface AutorContainerProps {
    content: RootNode[];
    nome: string;
    url: string;
    predominantColor: number[];
    width: number;
    height: number;
}

export const AutorContainer = ({ content, nome, url, predominantColor, width, height }: AutorContainerProps) => {
    return (
        <Container className="grid">
            <Image
                className="justify-self-center rounded-full border-4 border-gray-200 dark:border-gray-800 mb-4 "
                placeholder="blur"
                blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                src={url}
                alt={nome}
                width={width}
                height={height}
            />
            <BlocksRenderer content={content} />
        </Container>
    );
};
