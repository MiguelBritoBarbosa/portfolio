import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { Heading } from '@radix-ui/themes';
import { InternalPageContainer } from '@/components/InternalPageContainer';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { InternalPageDetails } from '@/components/InternalPageDetails';
import { ExperienciasData } from '@/config/domain/experiencias/experiencias';
import { getLocale, getTranslations } from 'next-intl/server';

export interface PremioProps {
    experiencia: ExperienciasData;
}

export default async function Experiencia({ experiencia }: PremioProps) {
    let url;
    let width;
    let height;
    if (
        experiencia.attributes.cover.data.attributes.formats !== null &&
        experiencia.attributes.cover.data.attributes.formats.medium !== undefined
    ) {
        url = `${API_ROOT}${experiencia.attributes.cover.data.attributes.formats.large.url}`;
        width = experiencia.attributes.cover.data.attributes.formats.large.width;
        height = experiencia.attributes.cover.data.attributes.formats.large.height;
    } else {
        url = `${API_ROOT}${experiencia.attributes.cover.data.attributes.url}`;
        width = experiencia.attributes.cover.data.attributes.width;
        height = experiencia.attributes.cover.data.attributes.height;
    }
    const predominantColor: number[] = await getPredominantColor(url);
    const t = await getTranslations('Pages.InternalPage.AuthorsPage');
    const locale = await getLocale();
    let inicio: string = experiencia.attributes.inicio;
    let termino: string = experiencia.attributes.termino;
    if (locale === 'pt') {
        inicio = new Date(inicio).toLocaleDateString('pt-BR', {
            timeZone: 'America/Sao_Paulo',
        });
        if (termino) {
            termino = new Date(termino).toLocaleDateString('pt-BR', {
                timeZone: 'America/Sao_Paulo',
            });
        }
    } else {
        inicio = new Date(inicio).toLocaleDateString('en', {
            timeZone: 'America/Sao_Paulo',
        });
        if (termino) {
            termino = new Date(termino).toLocaleDateString('en', {
                timeZone: 'America/Sao_Paulo',
            });
        }
    }
    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {`${experiencia.attributes.cargo} - ${experiencia.attributes.empresa}`}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <InternalPageContainer
                    content={experiencia.attributes.descricao}
                    titulo={`${experiencia.attributes.cargo} - ${experiencia.attributes.empresa}`}
                    url={url}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                    description={`${t('Experience time')}: ${inicio} - ${experiencia.attributes.termino !== null ? termino : t('until now')}`}
                />
                <InternalPageDetails
                    date={experiencia.attributes.createdAt}
                    autores={[experiencia.attributes.autor.data]}
                />
            </section>
        </Container>
    );
}
