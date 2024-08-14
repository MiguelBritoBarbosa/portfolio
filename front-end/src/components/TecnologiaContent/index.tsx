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
            <BlocksRenderer
                content={content}
                blocks={{
                    link: ({ children, url }) => (
                        <a className="underline hover:text-[--accent-a9] transition" target="_new" href={url}>
                            {children}
                        </a>
                    ),
                }}
            />
        </Container>
    );
};
