import { ProjetoData } from '@/config/domain/projetos/projetos';
import { Container } from './styles';
import { InternalPageContainer } from '@/components/InternalPageContainer';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { InternalPageDetails } from '@/components/InternalPageDetails';
import { ProjetoDetails } from '@/components/ProjetoDetails';

export interface ProjetoProps {
    projeto: ProjetoData;
}

export default async function Projeto({ projeto }: ProjetoProps) {
    const url = `${API_ROOT}${projeto.attributes.cover.data.attributes.url}`;
    const width = projeto.attributes.cover.data.attributes.width;
    const height = projeto.attributes.cover.data.attributes.height;
    const predominantColor: number[] = await getPredominantColor(url);
    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {projeto.attributes.titulo}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <InternalPageContainer
                    content={projeto.attributes.descricao}
                    titulo={projeto.attributes.titulo}
                    url={url}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                    destaque={projeto.attributes.destaque}
                    description={''}
                />
                <ProjetoDetails
                    tipoProjeto={projeto.attributes.tipoProjeto}
                    link={projeto.attributes.link}
                    repositorio={projeto.attributes.repositorio}
                    visibilidade={projeto.attributes.visibilidade}
                    tecnologias={projeto.attributes.tecnologias.data}
                    bancosDeDados={projeto.attributes.bancosDeDados.data}
                />
                <InternalPageDetails date={projeto.attributes.createdAt} autores={projeto.attributes.autores.data} />
            </section>
        </Container>
    );
}
