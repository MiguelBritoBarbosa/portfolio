import Image from 'next/image';
import { Container } from './styled';
import { PremioData } from '@/config/domain/premios/premios';
import { API_ROOT } from '@/config/siteConfig';
import Link from 'next/link';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { Button, Heading, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getDescription } from '@/utils/getDescription';

interface PremiosContainerProps {
    premio: PremioData;
    predominantColor: number[];
}

export const CardPremio = ({ premio, predominantColor }: PremiosContainerProps) => {
    const t = useTranslations('Sections.Awards');
    const description: string = getDescription(premio.attributes.descricao);

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

    return (
        <Container
            className="grid border bg-gray-200 dark:bg-gray-800 border-1 border-gray-400 rounded overflow-hidden justify-self-center"
            style={{ maxWidth: width }}
        >
            <Link title={premio.attributes.titulo} href={`/premios/${premio.attributes.slug}`}>
                <Image
                    src={url}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                    alt={premio.attributes.titulo}
                    width={width}
                    height={height}
                />
            </Link>
            <div className="p-4 md:p-6">
                <Heading
                    as="h3"
                    size={{ initial: '4', sm: '6' }}
                    className="text-center hover:text-[--accent-a9] transition mb-3"
                >
                    <Link title={premio.attributes.titulo} href={`/premios/${premio.attributes.slug}`}>
                        {premio.attributes.titulo}
                    </Link>
                </Heading>
                <Text as="p" className="mb-3">
                    {description}
                    {description.length === 160 ? <>...</> : <></>}
                </Text>
                <Button color="violet" className="transition">
                    <Link href={`/premios/${premio.attributes.slug}`} title={t('See more')}>
                        {t('See more')}
                    </Link>
                </Button>
            </div>
        </Container>
    );
};
