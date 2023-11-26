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
    destaque: boolean;
}

export const ProjetoContainer = ({ content, titulo, url, width, height, destaque }: PostContainerProps) => {
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
                <Image className="img-fluid img-thumbnail" src={url} alt={titulo} width={width} height={height} />
            </div>
            <div className="fs-5 tw-text-justify">
                <BlocksRenderer content={content} />
            </div>
        </Container>
    );
};
