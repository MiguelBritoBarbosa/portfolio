import Link from 'next/link';
import { ProjetoDate } from '../ProjetoDate';
import { Container } from './styled';
import { AutorData } from '@/config/domain/autores/autores';
import { tipoProjeto, visibilidadeProjeto } from '@/config/domain/projetos/projetos';

export interface ProjetoDetailsProps {
    date: string;
    autores: AutorData[];
    tipoProjeto: tipoProjeto;
    link: string;
    repositorio: string;
    visibilidade: visibilidadeProjeto;
}

export const ProjetoDetails = ({
    date,
    autores,
    tipoProjeto,
    link,
    repositorio,
    visibilidade,
}: ProjetoDetailsProps) => {
    return (
        <Container className="rounded p-3">
            <p className="fs-5 text-white font-bold">
                Publicado em <ProjetoDate date={date} /> por:{' '}
                {autores.map((autor) => {
                    return (
                        <>
                            <span key={`${autor.attributes.slug}`}>
                                <Link className="purple-color" href={`/autores/${autor.attributes.slug}`}>
                                    {autor.attributes.Nome}
                                </Link>
                            </span>
                            {' | '}
                        </>
                    );
                })}
            </p>
            <p className="fs-5 text-white font-bold">
                Âmbito do projeto: <span className="text-purple">{tipoProjeto}</span> | Visibilidade:{' '}
                <span className="text-purple">{visibilidade}</span>
            </p>
            <p className="fs-5 text-white font-bold">
                Link:{' '}
                {link !== null ? (
                    <a className="purple-color" href={link} target="_blank">
                        {link}
                    </a>
                ) : (
                    <>
                        <span className="text-purple">Privado</span>
                    </>
                )}
            </p>
            <p className="fs-5 text-white font-bold">
                Link do repositório:{' '}
                {repositorio !== null ? (
                    <a className="purple-color" href={repositorio} target="_blank"></a>
                ) : (
                    <>
                        <span className="text-purple">Privado</span>
                    </>
                )}
            </p>
        </Container>
    );
};
