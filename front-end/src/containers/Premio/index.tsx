import { PremioData } from '@/config/domain/premios/premios';
import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { InternalPageContainer } from '@/components/InternalPageContainer';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { InternalPageDetails } from '@/components/InternalPageDetails';

export interface PremioProps {
    premio: PremioData;
}

export default async function Premio({ premio }: PremioProps) {
    let url;
    let width;
    let height;
    if (
        premio.attributes.cover.data.attributes.formats !== null &&
        premio.attributes.cover.data.attributes.formats.medium !== undefined
    ) {
        url = `${API_ROOT}${premio.attributes.cover.data.attributes.formats.medium.url}`;
        width = premio.attributes.cover.data.attributes.formats.medium.width;
        height = premio.attributes.cover.data.attributes.formats.medium.height;
    } else {
        url = `${API_ROOT}${premio.attributes.cover.data.attributes.url}`;
        width = premio.attributes.cover.data.attributes.width;
        height = premio.attributes.cover.data.attributes.height;
    }
    const predominantColor: number[] = await getPredominantColor(url);
    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {premio.attributes.titulo}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <InternalPageContainer
                    content={premio.attributes.descricao}
                    titulo={premio.attributes.titulo}
                    url={url}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                />

                <InternalPageDetails date={premio.attributes.createdAt} autores={[premio.attributes.autor.data]} />
            </section>
        </Container>
    );
}
