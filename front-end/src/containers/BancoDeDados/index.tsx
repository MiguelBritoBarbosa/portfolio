import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { TecnologiaContainer } from '@/components/TecnologiaContainer';
import { BancosDeDadosData } from '@/config/domain/bancos-de-dados/bancosDeDados';
import { TecnologiaDetails } from '@/components/TecnologiaDetails';
import { TecnologiaContent } from '@/components/TecnologiaContent';

export interface BancoDeDadosProps {
    bancoDeDados: BancosDeDadosData;
}

export default async function BancoDeDados({ bancoDeDados }: BancoDeDadosProps) {
    let url;
    let width;
    let height;
    let predominantColor: number[] = [];
    if (bancoDeDados.attributes.icon.data.attributes.ext) {
        url = `${API_ROOT}${bancoDeDados.attributes.icon.data.attributes.url}`;
        width = 256;
        height = 256;
    } else if (
        bancoDeDados.attributes.icon.data.attributes.formats !== null &&
        bancoDeDados.attributes.icon.data.attributes.formats.small !== undefined
    ) {
        url = `${API_ROOT}${bancoDeDados.attributes.icon.data.attributes.formats.small.url}`;
        width = bancoDeDados.attributes.icon.data.attributes.formats.small.width;
        height = bancoDeDados.attributes.icon.data.attributes.formats.small.height;
        predominantColor = await getPredominantColor(url);
    } else {
        url = `${API_ROOT}${bancoDeDados.attributes.icon.data.attributes.url}`;
        width = bancoDeDados.attributes.icon.data.attributes.width;
        height = bancoDeDados.attributes.icon.data.attributes.height;
        predominantColor = await getPredominantColor(url);
    }

    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {bancoDeDados.attributes.nome}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <TecnologiaContainer
                    titulo={bancoDeDados.attributes.nome}
                    url={url}
                    ext={bancoDeDados.attributes.icon.data.attributes.ext}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                />
                <TecnologiaContent content={bancoDeDados.attributes.descricao} />
                <TecnologiaDetails date={bancoDeDados.attributes.createdAt} tipo={bancoDeDados.attributes.tipo} />
            </section>
        </Container>
    );
}
