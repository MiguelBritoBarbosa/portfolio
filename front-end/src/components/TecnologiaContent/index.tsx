'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

export interface TecnologiaContentProps {
    content: RootNode[];
}

export const TecnologiaContent = ({ content }: TecnologiaContentProps) => {
    return (
        <Container className="grid">
            <BlocksRenderer content={content} />
        </Container>
    );
};
