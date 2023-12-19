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
                <p>
                    Publicado em <DateFormat date={date} /> por:{' '}
                    <span>
                        <Link className="purple-color" href={`/autores/${autor.attributes.slug}`}>
                            {autor.attributes.Nome}
                        </Link>
                    </span>
                </p>
                <p>
                    Credencial:{' '}
                    {credencial !== null ? (
                        <a href={credencial} target="_blank">
                            {credencial}
                        </a>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </p>
            </div>
        </Container>
    );
};
