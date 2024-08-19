'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { Container } from './styled';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import Image from 'next/image';
import { Text } from '@radix-ui/themes';
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
                    className="bg-orange-500 text-yellow-300 gap-x-1 justify-self-end rounded-full mb-2 px-1 dark:bg-yellow-300 dark:text-orange-500"
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
                        link: ({ children, url }) => (
                            <a className="underline hover:text-[--accent-a9] transition" target="_new" href={url}>
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
                                url = `${API_ROOT}${url}`;
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
            )}
        </Container>
    );
};
