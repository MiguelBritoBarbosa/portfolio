'use client';
import Link from 'next/link';
import { Container } from './styled';
import Image from 'next/image';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { API_ROOT } from '@/config/siteConfig';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface ProjetosDestaqueProps {
    destaques: ProjetoData[];
}

export const ProjetosDestaque = ({ destaques }: ProjetosDestaqueProps) => {
    return (
        <Container className="row p-3 d-flex justify-content-between rounded">
            {destaques.map((destaque) => {
                const url = `${API_ROOT}${destaque.attributes.cover.data.attributes.formats.small.url}`;
                const width = destaque.attributes.cover.data.attributes.formats.small.width;
                const height = destaque.attributes.cover.data.attributes.formats.small.height;
                return (
                    <div key={destaque.attributes.slug} className="col-12 col-lg-6">
                        <div style={{ height: '700px' }} className="container p-3 shadow rounded mt-2 mb-2 bg-white">
                            <h3 className="text-center">{destaque.attributes.Titulo}</h3>
                            <div className="d-flex justify-content-center">
                                <Image
                                    className="img-fluid img-thumbnaild"
                                    src={url}
                                    alt={destaque.attributes.Titulo}
                                    width={width}
                                    height={height}
                                />
                            </div>
                            <p className="mt-1">
                                <span className="d-block text-truncate tw-text-justify">
                                    <BlocksRenderer content={destaque.attributes.Descricao} />
                                </span>
                                <span className="">
                                    <Link
                                        className="text-decoration-underline ver-mais"
                                        href={`/projetos/${destaque.attributes.slug}`}
                                    >
                                        ver mais...
                                    </Link>
                                </span>
                            </p>
                            <div className="d-flex">
                                <p>
                                    Autores:{' '}
                                    {destaque.attributes.autores.data.map((autor, index) => {
                                        return (
                                            <>
                                                <span key={`${autor.attributes.slug}${index}`}>
                                                    <Link href={`/autores/${autor.attributes.slug}`}>
                                                        {autor.attributes.Nome}
                                                    </Link>
                                                </span>
                                                {' | '}
                                            </>
                                        );
                                    })}
                                </p>
                            </div>
                            <p>
                                Âmbito: {destaque.attributes.TipoProjeto} | Visibilidade:{' '}
                                {destaque.attributes.Visibilidade}
                            </p>
                            <p>
                                {destaque.attributes.Repositorio !== null && (
                                    <>Repositório: {destaque.attributes.Repositorio} | </>
                                )}
                                {destaque.attributes.Link !== null && (
                                    <>
                                        Link:{' '}
                                        <a href={destaque.attributes.Link} target=" _blank">
                                            {destaque.attributes.Link}{' '}
                                        </a>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                );
            })}
        </Container>
    );
};
