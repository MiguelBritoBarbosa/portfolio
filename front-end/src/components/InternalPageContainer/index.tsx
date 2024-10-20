'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';
import { Blockquote, Code, Text } from '@radix-ui/themes';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { API_ROOT } from '@/config/siteConfig';

export interface InternalPageContainerProps {
    content: RootNode[] | string;
    description: string;
    titulo: string;
    url: string;
    predominantColor: number[];
    width: number;
    height: number;
    destaque?: boolean;
}

export const InternalPageContainer = ({
    content,
    description = '',
    titulo,
    url,
    predominantColor,
    width,
    height,
    destaque = false,
}: InternalPageContainerProps) => {
    return (
        <Container className="grid">
            {destaque === true && (
                <Text
                    weight="bold"
                    className="bg-orange-900 text-yellow-300 flex gap-x-1 justify-self-end rounded-full mb-2 px-1 dark:bg-yellow-300 dark:text-orange-900"
                >
                    <i className="bi bi-star-fill"></i>Projeto Destaque<i className="bi bi-star-fill"></i>
                </Text>
            )}

            <Image
                className="justify-self-center rounded mb-4 "
                placeholder="blur"
                blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                src={url}
                alt={titulo}
                width={width}
                height={height}
            />
            {description !== null && (
                <Text as="p" size="2" color="gray">
                    {description}
                </Text>
            )}
            {typeof content === 'string' ? (
                <Text as="p">{content}</Text>
            ) : (
                <BlocksRenderer
                    content={content}
                    blocks={{
                        paragraph: ({ children }) => {
                            return <Text as="p">{children}</Text>;
                        },
                        link: ({ children, url }) => (
                            <a
                                className="underline hover:text-[--accent-a9] transition break-all"
                                target="_new"
                                href={url}
                            >
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
                        quote: ({ children }: any) => {
                            return (
                                <pre>
                                    <Blockquote>{children}</Blockquote>
                                </pre>
                            );
                        },
                        code: ({ children }: any) => {
                            return (
                                <Code>
                                    <pre>{children}</pre>
                                </Code>
                            );
                        },
                    }}
                />
            )}
        </Container>
    );
};
