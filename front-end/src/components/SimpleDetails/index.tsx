import Link from 'next/link';
import { DateFormat } from '../DateFormat';
import { Container } from './styled';
import { AutorData } from '@/config/domain/autores/autores';

export interface SimpleDetailsProps {
    date: string;
    autor: AutorData;
}

export const SimpleDetails = ({ date, autor }: SimpleDetailsProps) => {
    return (
        <Container className="rounded p-3 d-flex align-items-center">
            <div className="fs-5 text-white font-bold ">
                Publicado em <DateFormat date={date} /> por:{' '}
                <span>
                    <Link className="purple-color" href={`/autores/${autor.attributes.slug}`}>
                        {autor.attributes.Nome}
                    </Link>
                </span>
            </div>
        </Container>
    );
};
