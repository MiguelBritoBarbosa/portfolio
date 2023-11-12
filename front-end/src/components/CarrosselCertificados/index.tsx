'use client';
import Image from 'next/image';
import { Container } from './styled';
import { useEffect } from 'react';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { API_ROOT } from '@/config/siteConfig';
import Link from 'next/link';

interface CarrosselCertificadosProps {
    certificados: CertificadoData[];
}

export const CarrosselCertificados = ({ certificados }: CarrosselCertificadosProps) => {
    useEffect(() => {
        const copy: any = document.querySelector('.logos-slide')?.cloneNode(true);
        document.querySelector('.logos')?.appendChild(copy);
    }, []);

    return (
        <Container className="container-fluid my-3">
            <h3>Certificados</h3>
            <div className="logos">
                <div className="logos-slide p-3">
                    {certificados.map((certificado: CertificadoData) => {
                        const url = `${API_ROOT}${certificado.attributes.documento.data.attributes.formats.thumbnail.url}`;
                        const width = certificado.attributes.documento.data.attributes.formats.thumbnail.width;
                        const height = certificado.attributes.documento.data.attributes.formats.thumbnail.height;
                        console.log(`width: ${width}`);
                        console.log(`height: ${height}`);
                        return (
                            <>
                                <Link key={certificado.id} href={certificado.attributes.credencial}>
                                    <Image
                                        src={url}
                                        alt={certificado.attributes.Titulo}
                                        width={width}
                                        height={height}
                                    />
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};
