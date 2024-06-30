import Link from 'next/link';
import { DateFormat } from '../DateFormat';
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
                Publicado em <DateFormat date={date} /> por:{' '}
                {autores.map((autor, index) => {
                    return (
                        <span key={`${autor.attributes.slug}`}>
                            <Link className="purple-color" href={`/autores/${autor.attributes.slug}`}>
                                {autor.attributes.nome}
                            </Link>
                            {index !== autores.length - 1 ? <> | </> : <></>}
                        </span>
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
                        <span className="text-purple">...</span>
                    </>
                )}
            </p>
            <p className="fs-5 text-white font-bold">
                Link do repositório:{' '}
                {repositorio !== null ? (
                    <a className="purple-color tw-break-words" href={repositorio} target="_blank">
                        {repositorio}
                    </a>
                ) : (
                    <>
                        <span className="text-purple">...</span>
                    </>
                )}
            </p>
        </Container>
    );
};
