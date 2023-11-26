'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';

export interface PostContainerProps {
    content: RootNode[];
    titulo: string;
    url: string;
    width: number;
    height: number;
}

export const ProjetoContainer = ({ content, titulo, url, width, height }: PostContainerProps) => {
    return (
        <Container className="bg-white p-3">
            <div className="text-center">
                <Image className="img-fluid img-thumbnail" src={url} alt={titulo} width={width} height={height} />
            </div>
            <BlocksRenderer content={content} />
        </Container>
    );
};
