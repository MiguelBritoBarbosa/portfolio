import { CertificadoData } from '@/config/domain/certificados/certificados';
import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { InternalPageContainer } from '@/components/InternalPageContainer';
import { InternalPageDetails } from '@/components/InternalPageDetails';
import { CertificadoDetails } from '@/components/CertificadoDetails';

export interface CertificadoProps {
    certificado: CertificadoData;
}

export default async function Certificado({ certificado }: CertificadoProps) {
    let url;
    let width;
    let height;
    if (
        certificado.attributes.cover.data.attributes.formats !== null &&
        certificado.attributes.cover.data.attributes.formats.large !== undefined
    ) {
        url = `${API_ROOT}${certificado.attributes.cover.data.attributes.formats.large.url}`;
        width = certificado.attributes.cover.data.attributes.formats.large.width;
        height = certificado.attributes.cover.data.attributes.formats.large.height;
    } else {
        url = `${API_ROOT}${certificado.attributes.cover.data.attributes.url}`;
        width = certificado.attributes.cover.data.attributes.width;
        height = certificado.attributes.cover.data.attributes.height;
    }
    const predominantColor: number[] = await getPredominantColor(url);
    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {certificado.attributes.titulo}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <InternalPageContainer
                    content={certificado.attributes.descricao}
                    titulo={certificado.attributes.titulo}
                    url={url}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                    description={''}
                />
                <CertificadoDetails
                    documento={certificado.attributes.documento}
                    credencial={certificado.attributes.credencial}
                />
                <InternalPageDetails
                    date={certificado.attributes.createdAt}
                    autores={[certificado.attributes.autor.data]}
                />
            </section>
            {/*
            <hr />
            <ProjetoDetails
                date={certificado.attributes.createdAt}
                autores={certificado.attributes.autores.data}
                tipoProjeto={certificado.attributes.tipoProjeto}
                link={certificado.attributes.link}
                repositorio={certificado.attributes.repositorio}
                visibilidade={certificado.attributes.visibilidade}
            /> */}
        </Container>
    );
}
