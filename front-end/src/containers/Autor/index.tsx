import { AutorData } from '@/config/domain/autores/autores';
import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { AutorContainer } from '@/components/AutorContainer';
import { AutorDetails } from '@/components/AutorDetails';
import { ProjetosCarrossel } from '@/components/ProjetosCarrossel';
import { Heading } from '@radix-ui/themes';

export interface AutorProps {
    autor: AutorData;
}

export default function Autor({ autor }: AutorProps) {
    return (
        <Container id={autor.attributes.slug} className="container mt-3 p-md-5">
            <Heading>{autor.attributes.nome}</Heading>
            <AutorContainer
                content={autor.attributes.apresentacao}
                nome={autor.attributes.nome}
                url={`${API_ROOT}${autor.attributes.foto.data.attributes.url}`}
                width={autor.attributes.foto.data.attributes.formats.medium.width}
                height={autor.attributes.foto.data.attributes.formats.medium.height}
            />
            <hr />
            <AutorDetails
                gitHub={autor.attributes.github}
                linkedin={autor.attributes.linkedin}
                site={autor.attributes.site}
            />
            <hr />
            <ProjetosCarrossel projetos={autor.attributes.projetos.data} />
        </Container>
    );
}
