import Link from 'next/link';
import { DateFormat } from '../DateFormat';
import { Container } from './styled';
import { AutorData } from '@/config/domain/autores/autores';

export interface PremioDetailsProps {
    date: string;
    autor: AutorData;
}

export const PremioDetails = ({ date, autor }: PremioDetailsProps) => {
    return (
        <Container className="rounded p-3 d-flex align-items-center">
            <div className="fs-5 text-white font-bold ">
                Publicado em <DateFormat date={date} /> por:{' '}
                <span>
                    <Link className="purple-color" href={`/autores/${autor.attributes.slug}`}>
                        {autor.attributes.nome}
                    </Link>
                </span>
            </div>
        </Container>
    );
};
