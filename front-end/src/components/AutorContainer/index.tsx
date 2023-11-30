'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';

export interface AutorContainerProps {
    content: RootNode[];
    nome: string;
    url: string;
    width: number;
    height: number;
}

export const AutorContainer = ({ content, nome, url, width, height }: AutorContainerProps) => {
    return (
        <Container className="rounded bg-white p-3">
            <div className="text-center">
                <Image className="img-fluid img-thumbnail mb-3" src={url} alt={nome} width={width} height={height} />
            </div>
            <div className="fs-5 tw-text-justify text-break">
                {content !== null && <BlocksRenderer content={content} />}
            </div>
        </Container>
    );
};
