'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';

export interface PremioContainerProps {
    content: RootNode[];
    titulo: string;
    url: string;
    width: number;
    height: number;
}

export const PremioContainer = ({ content, titulo, url, width, height }: PremioContainerProps) => {
    return (
        <Container className="rounded bg-white p-3">
            <div className="text-center">
                <Image className="img-fluid img-thumbnail mb-3" src={url} alt={titulo} width={width} height={height} />
            </div>
            <div className="fs-5 tw-text-justify text-break">
                <BlocksRenderer content={content} />
            </div>
        </Container>
    );
};
