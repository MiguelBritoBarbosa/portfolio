import { PremioData } from '@/config/domain/premios/premios';
import { Container } from './styles';
import { Heading } from '@/components/Heading';
import { PremioContainer } from '@/components/PremioContainer';
import { API_ROOT } from '@/config/siteConfig';
import { PremioDetails } from '@/components/PremioDetails';

export interface PremioProps {
    premio: PremioData;
}

export default function Premio({ premio }: PremioProps) {
    return (
        <Container id={premio.attributes.slug} className="container mt-3 p-5">
            <Heading>{premio.attributes.titulo}</Heading>
            <PremioContainer
                content={premio.attributes.descricao}
                titulo={premio.attributes.titulo}
                url={`${API_ROOT}${premio.attributes.cover.data.attributes.url}`}
                width={premio.attributes.cover.data.attributes.formats.medium.width}
                height={premio.attributes.cover.data.attributes.formats.medium.height}
            />
            <hr />
            <PremioDetails date={premio.attributes.createdAt} autor={premio.attributes.autor.data} />
        </Container>
    );
}
