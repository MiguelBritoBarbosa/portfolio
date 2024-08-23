'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { API_ROOT } from '@/config/siteConfig';
import Image from 'next/image';

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
                        <a className="underline hover:text-[--accent-a9] transition break-all" target="_new" href={url}>
                            {children}
                        </a>
                    ),
                    image: ({ image }: any) => {
                        let url;
                        let width;
                        let height;
                        if (image.formats !== null && image.formats.large !== undefined) {
                            url = `${API_ROOT}${image.formats.large.url}`;
                            width = image.formats.large.width;
                            height = image.formats.large.height;
                        } else {
                            url = image.url;
                            width = image.width;
                            height = image.height;
                        }
                        return (
                            <Image
                                src={url}
                                width={width}
                                height={height}
                                alt={image.caption ? image.caption : 'image'}
                            />
                        );
                    },
                }}
            />
        </Container>
    );
};
