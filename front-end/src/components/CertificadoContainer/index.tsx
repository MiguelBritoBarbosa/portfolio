'use client';
import { Text } from '@radix-ui/themes';
import { Container } from './styled';
import Image from 'next/image';

export interface CertificadoContainerProps {
    content: string;
    titulo: string;
    url: string;
    width: number;
    height: number;
}

export const CertificadoContainer = ({ content, titulo, url, width, height }: CertificadoContainerProps) => {
    return (
        <Container className="rounded bg-white p-3">
            <div className="text-center">
                <Image className="img-fluid img-thumbnail mb-3" src={url} alt={titulo} width={width} height={height} />
            </div>
            <div className="grid">
                <Text as="p">{content}</Text>
            </div>
        </Container>
    );
};
