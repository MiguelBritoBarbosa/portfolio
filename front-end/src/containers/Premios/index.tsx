import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { Container } from './styled';
import { PremioData } from '@/config/domain/premios/premios';
import { CardPremio } from '@/components/CardPremio';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { API_ROOT } from '@/config/siteConfig';

interface PremiosProps {
    premios: PremioData[];
}

export default async function Projetos({ premios }: PremiosProps) {
    const t = await getTranslations('Pages.Awards');
    return (
        <Container>
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('Awards I have received throughout my career')}
            </Heading>
            <section className="container mx-auto py-8 grid md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                {premios.map(async (premio) => {
                    const url = `${API_ROOT}${premio.attributes.cover.data.attributes.formats.medium ? premio.attributes.cover.data.attributes.formats.medium.url : premio.attributes.cover.data.attributes.url}`;
                    const predominantColor: number[] = await getPredominantColor(url);
                    return (
                        <CardPremio
                            predominantColor={predominantColor}
                            key={`awards-page-premio-${premio.attributes.slug}`}
                            premio={premio}
                        />
                    );
                })}
            </section>
        </Container>
    );
}
