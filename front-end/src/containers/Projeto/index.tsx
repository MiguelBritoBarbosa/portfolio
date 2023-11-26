import { ProjetoData } from '@/config/domain/projetos/projetos';
import { Container } from './styles';
import { ProjetoHeading } from '@/components/ProjetoHeading';
import { ProjetoContainer } from '@/components/ProjetoContainer';
import { API_ROOT } from '@/config/siteConfig';

export interface ProjetoProps {
    projeto: ProjetoData;
}

export default function Projeto({ projeto }: ProjetoProps) {
    return (
        <Container id={projeto.attributes.slug} className="container mt-3 p-5">
            <ProjetoHeading>{projeto.attributes.Titulo}</ProjetoHeading>
            <ProjetoContainer
                content={projeto.attributes.Descricao}
                titulo={projeto.attributes.Titulo}
                url={`${API_ROOT}${projeto.attributes.cover.data.attributes.url}`}
                width={projeto.attributes.cover.data.attributes.formats.medium.width}
                height={projeto.attributes.cover.data.attributes.formats.medium.height}
            />
            <hr />
        </Container>
    );
}
