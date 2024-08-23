import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { TecnologiasData } from '@/config/domain/tecnologias/tecnologias';
import { TecnologiaContainer } from '@/components/TecnologiaContainer';
import { TecnologiaDetails } from '@/components/TecnologiaDetails';
import { TecnologiaContent } from '@/components/TecnologiaContent';

export interface TecnologiaProps {
    tecnologia: TecnologiasData;
}

export default async function Tecnologia({ tecnologia }: TecnologiaProps) {
    let url;
    let width;
    let height;
    let predominantColor: number[] = [];
    if (tecnologia.attributes.icon.data.attributes.ext) {
        url = `${API_ROOT}${tecnologia.attributes.icon.data.attributes.url}`;
        width = 256;
        height = 256;
    } else if (
        tecnologia.attributes.icon.data.attributes.formats !== null &&
        tecnologia.attributes.icon.data.attributes.formats.large !== undefined
    ) {
        url = `${API_ROOT}${tecnologia.attributes.icon.data.attributes.formats.large.url}`;
        width = tecnologia.attributes.icon.data.attributes.formats.large.width;
        height = tecnologia.attributes.icon.data.attributes.formats.large.height;
        predominantColor = await getPredominantColor(url);
    } else {
        url = tecnologia.attributes.icon.data.attributes.url;
        width = tecnologia.attributes.icon.data.attributes.width;
        height = tecnologia.attributes.icon.data.attributes.height;
        predominantColor = await getPredominantColor(url);
    }

    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {tecnologia.attributes.nome}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <TecnologiaContainer
                    titulo={tecnologia.attributes.nome}
                    url={url}
                    ext={tecnologia.attributes.icon.data.attributes.ext}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                />
                <TecnologiaContent content={tecnologia.attributes.descricao} />
                <TecnologiaDetails date={tecnologia.attributes.createdAt} tipo={tecnologia.attributes.tipo} />
            </section>
        </Container>
    );
}
