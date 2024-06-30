import Link from 'next/link';
import { Container } from './styled';
import Image from 'next/image';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { API_ROOT, API_URL } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { fetchJson } from '@/utils/fetchJson';
import { TecnologiasData } from '@/config/domain/tecnologias/tecnologias';

interface ProjetosDestaqueProps {
    destaques: ProjetoData[];
}

export const ProjetosDestaque = async ({ destaques }: ProjetosDestaqueProps) => {
    return (
        <Container className="row p-3 d-flex justify-content-between rounded">
            {destaques.map(async (destaque) => {
                const url = `${API_ROOT}${destaque.attributes.cover.data.attributes.formats.small.url}`;
                const width = destaque.attributes.cover.data.attributes.formats.small.width;
                const height = destaque.attributes.cover.data.attributes.formats.small.height;
                const description: any = destaque.attributes.descricao[0].children[0];

                const predominantColor = await getPredominantColor(url);

                return (
                    <div
                        key={`projetoDestaque:${destaque.attributes.slug}`}
                        className="d-flex col-12 col-lg-6 align-items-stretch"
                    >
                        <div className="container p-3 shadow rounded mt-2 mb-2 bg-white">
                            <h3 className="text-center">{destaque.attributes.titulo}</h3>
                            <div className="d-flex justify-content-center">
                                <Image
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL(
                                        predominantColor[0],
                                        predominantColor[1],
                                        predominantColor[2],
                                    )}
                                    className="img-thumbnail"
                                    src={url}
                                    alt={destaque.attributes.titulo}
                                    width={width}
                                    height={height}
                                />
                            </div>
                            <div className="mt-1 mb-3">
                                <div className="d-block tw-text-justify">
                                    <p className="m-0 tw-leading-6 ">
                                        {description.text.split(' ').splice(0, 42).join(' ')}
                                        {description.text.split(' ').length > 42 ? <>...</> : <></>}
                                    </p>
                                </div>
                                <Link
                                    className="text-decoration-underline ver-mais"
                                    href={`/projetos/${destaque.attributes.slug}`}
                                >
                                    ver mais...
                                </Link>
                            </div>
                            <div className="mb-3">
                                Autores:{' '}
                                {destaque.attributes.autores.data.map((autor, index) => {
                                    return (
                                        <span key={`${destaque.attributes.slug}autor:${autor.attributes.slug}${index}`}>
                                            <Link href={`/autores/${autor.attributes.slug}`}>
                                                {autor.attributes.nome}
                                            </Link>
                                            {index !== destaque.attributes.autores.data.length - 1 ? <> | </> : <></>}
                                        </span>
                                    );
                                })}
                            </div>
                            <p>
                                Âmbito: {destaque.attributes.tipoProjeto} | Visibilidade:{' '}
                                {destaque.attributes.visibilidade}
                            </p>
                            <p>
                                {destaque.attributes.repositorio !== null && (
                                    <>Repositório: {destaque.attributes.repositorio} | </>
                                )}
                                {destaque.attributes.link !== null && (
                                    <>
                                        Link:{' '}
                                        <a href={destaque.attributes.link} target=" _blank">
                                            {destaque.attributes.link}{' '}
                                        </a>
                                    </>
                                )}
                            </p>
                            <div className="d-flex gap-3">
                                <span>Tecnologias: </span>
                                {destaque.attributes.tecnologias.data.map(async (tecnologia) => {
                                    const tecnologiaIcon: { data: TecnologiasData } = await fetchJson(
                                        `${API_URL}/tecnologias/${tecnologia.id}?populate=icon&`,
                                    );
                                    const iconUrl = `${API_ROOT}${tecnologiaIcon.data.attributes.icon.data.attributes.url}`;
                                    return (
                                        <Link
                                            key={`destaque${destaque.id}tecnologia${tecnologia.id}`}
                                            href={`/tecnologias/${tecnologia.attributes.slug}`}
                                        >
                                            <Image
                                                className="img-fluid"
                                                src={iconUrl}
                                                alt={tecnologia.attributes.nome}
                                                width={20}
                                                height={20}
                                            />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </Container>
    );
};
