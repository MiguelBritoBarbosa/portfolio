import { AutorData } from '@/config/domain/autores/autores';
import { Container } from './styles';
import { Heading } from '@/components/Heading';
import { API_ROOT } from '@/config/siteConfig';
import { AutorContainer } from '@/components/AutorContainer';
import { AutorDetails } from '@/components/AutorDetails';

export interface AutorProps {
    autor: AutorData;
}

export default function Autor({ autor }: AutorProps) {
    return (
        <Container id={autor.attributes.slug} className="container mt-3 p-5">
            <Heading>{autor.attributes.Nome}</Heading>
            <AutorContainer
                content={autor.attributes.Apresentacao}
                nome={autor.attributes.Nome}
                url={`${API_ROOT}${autor.attributes.Foto.data.attributes.url}`}
                width={autor.attributes.Foto.data.attributes.formats.medium.width}
                height={autor.attributes.Foto.data.attributes.formats.medium.height}
            />
            <hr />
            <AutorDetails
                gitHub={autor.attributes.GitHub}
                linkedin={autor.attributes.Linkedin}
                site={autor.attributes.site}
                projetos={autor.attributes.projetos.data}
            />
        </Container>
    );
}
