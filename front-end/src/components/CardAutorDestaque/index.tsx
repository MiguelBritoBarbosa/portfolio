import Image from 'next/image';
import { Container } from './styled';
import Link from 'next/link';
import { AutorData } from '@/config/domain/autores/autores';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { Button, Heading, Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

interface CardAutorDestaqueProps {
    autorDestaque: AutorData;
}

export const CardAutorDestaque = async ({ autorDestaque }: CardAutorDestaqueProps) => {
    const t = await getTranslations('Sections.Highlights');
    let url;
    let width;
    let height;
    if (
        autorDestaque.attributes.foto.data.attributes.formats !== null &&
        autorDestaque.attributes.foto.data.attributes.formats.medium !== undefined
    ) {
        url = `${API_ROOT}${autorDestaque.attributes.foto.data.attributes.formats.medium.url}`;
        width = autorDestaque.attributes.foto.data.attributes.formats.medium.width;
        height = autorDestaque.attributes.foto.data.attributes.formats.medium.height;
    } else {
        url = `${API_ROOT}${autorDestaque.attributes.foto.data.attributes.url}`;
        width = autorDestaque.attributes.foto.data.attributes.width;
        height = autorDestaque.attributes.foto.data.attributes.height;
    }
    const description: any = autorDestaque.attributes.apresentacao
        ? autorDestaque.attributes.apresentacao[0].children[0]
        : { text: '' };

    const predominantColor = await getPredominantColor(url);

    return (
        <Container className="grid rounded overflow-hidden border bg-gray-200 dark:bg-gray-800 border-1 border-gray-400 justify-self-center">
            <Link title={autorDestaque.attributes.nome} href={`/autores/${autorDestaque.attributes.slug}`}>
                <Image
                    placeholder="blur"
                    blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                    src={url}
                    alt={autorDestaque.attributes.nome}
                    width={width}
                    height={height}
                />
            </Link>
            <div className="p-4 md:p-6">
                <Heading as="h3" size={'4'} className="mb-3">
                    <Link
                        className="hover:text-[--accent-a9] transition"
                        href={`/autores/${autorDestaque.attributes.slug}`}
                        title={autorDestaque.attributes.nome}
                    >
                        {autorDestaque.attributes.nome}
                    </Link>
                </Heading>
                <Text as="p" className="mb-3">
                    {description.text.split(' ').splice(0, 24).join(' ')}
                    {description.text.split(' ').length > 24 ? <>...</> : <></>}
                </Text>
                <Button color="violet" className="transition">
                    <Link title={t('See my profile')} href={`/autores/${autorDestaque.attributes.slug}`}>
                        {t('See my profile')}
                    </Link>
                </Button>
            </div>
        </Container>
    );
};
