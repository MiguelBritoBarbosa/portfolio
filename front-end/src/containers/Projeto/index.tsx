import { ProjetoData } from '@/config/domain/projetos/projetos';
import { Container } from './styles';
import { Heading } from '@/components/Heading';
import { ProjetoContainer } from '@/components/ProjetoContainer';
import { API_ROOT } from '@/config/siteConfig';
import { ProjetoDetails } from '@/components/ProjetoDetails';

export interface ProjetoProps {
    projeto: ProjetoData;
}

export default function Projeto({ projeto }: ProjetoProps) {
    return (
        <Container id={projeto.attributes.slug} className="container mt-3 p-md-5">
            <Heading>{projeto.attributes.titulo}</Heading>
            <ProjetoContainer
                content={projeto.attributes.descricao}
                titulo={projeto.attributes.titulo}
                url={`${API_ROOT}${projeto.attributes.cover.data.attributes.url}`}
                width={projeto.attributes.cover.data.attributes.formats.medium.width}
                height={projeto.attributes.cover.data.attributes.formats.medium.height}
                destaque={projeto.attributes.Destaque}
            />
            <hr />
            <ProjetoDetails
                date={projeto.attributes.createdAt}
                autores={projeto.attributes.autores.data}
                tipoProjeto={projeto.attributes.tipoProjeto}
                link={projeto.attributes.link}
                repositorio={projeto.attributes.repositorio}
                visibilidade={projeto.attributes.visibilidade}
            />
        </Container>
    );
}
