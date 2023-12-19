'use client';
import Image from 'next/image';
import { Container } from './styled';
import Link from 'next/link';
import { AutorData } from '@/config/domain/autores/autores';
import { API_ROOT } from '@/config/siteConfig';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface CardMiguelProps {
    miguel: AutorData;
}

export const CardMiguel = ({ miguel }: CardMiguelProps) => {
    console.log(miguel);
    const url = `${API_ROOT}${miguel.attributes.Foto.data.attributes.url}`;
    return (
        <div className="d-flex justify-content-center">
            <Container className="card">
                <Image className="card-img-top img-fluid" src={url} alt="Card image" width={500} height={512} />
                <div className="card-body">
                    <h4 className="card-title">{miguel.attributes.Nome}</h4>
                    <div className="card-text">
                        <span className="d-block text-truncate tw-text-justify">
                            <BlocksRenderer content={miguel.attributes.Apresentacao} />
                        </span>
                    </div>
                    <Link href="/autores/miguel-brito-barbosa" className="btn btn-primary">
                        Veja meu perfil
                    </Link>
                </div>
            </Container>
        </div>
    );
};
