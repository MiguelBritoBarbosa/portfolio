import Link from 'next/link';
import { DateFormat } from '../DateFormat';
import { Container } from './styled';
import { AutorData } from '@/config/domain/autores/autores';

export interface CertificadoDetailsProps {
    date: string;
    autor: AutorData;
    credencial: string;
}

export const CertificadoDetails = ({ date, autor, credencial }: CertificadoDetailsProps) => {
    return (
        <Container className="rounded p-3 d-flex align-items-center">
            <div className="fs-5 text-white font-bold ">
                <div className="mb-4 text-break">
                    <span>
                        Publicado em <DateFormat date={date} /> por:{' '}
                    </span>
                    <Link className="purple-color" href={`/autores/${autor.attributes.slug}`}>
                        {autor.attributes.nome}
                    </Link>
                </div>
                <div className="mb-4 text-break">
                    <span>Credencial: </span>
                    {credencial !== null ? (
                        <a className="purple-color" href={credencial} target="_new">
                            {credencial}
                        </a>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};
