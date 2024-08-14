'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { Text } from '@radix-ui/themes';

export interface AutorContainerProps {
    content: RootNode[];
    title: string;
    nome: string;
    url: string;
    predominantColor: number[];
    width: number;
    height: number;
}

export const AutorContainer = ({ content, title, nome, url, predominantColor, width, height }: AutorContainerProps) => {
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
            {title !== null && (
                <Text as="p" size="2" color="gray" align="center">
                    {title}
                </Text>
            )}
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
