import { AutorData } from '@/config/domain/autores/autores';
import { Container } from './styles';

export interface AutorProps {
    autor: AutorData;
}

export default function Autor({ autor }: AutorProps) {
    return (
        <Container id={autor.attributes.slug} className="container mt-3 p-5">
            <div>teste</div>
        </Container>
    );
}
