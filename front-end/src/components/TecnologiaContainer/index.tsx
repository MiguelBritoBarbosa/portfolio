import { Container } from './styled';
import Image from 'next/image';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { SVGContainer } from '../SVGContainer';

export interface TecnologiaContainerProps {
    titulo: string;
    url: string;
    ext: string;
    predominantColor: number[];
    width: number;
    height: number;
    destaque?: boolean;
}

export const TecnologiaContainer = ({
    titulo,
    url,
    ext,
    predominantColor,
    width,
    height,
}: TecnologiaContainerProps) => {
    return (
        <Container className="grid">
            {ext === '.svg' ? (
                <SVGContainer className="w-64 h-64 justify-self-center rounded mb-4" svgUrl={url} />
            ) : (
                <Image
                    className="justify-self-center rounded mb-4"
                    placeholder="blur"
                    blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                    src={url}
                    alt={titulo}
                    width={width}
                    height={height}
                />
            )}
        </Container>
    );
};
