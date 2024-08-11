import Link from 'next/link';
import { DateFormat } from '../DateFormat';
import { Container } from './styled';
import { AutorData } from '@/config/domain/autores/autores';
import { Text } from '@radix-ui/themes';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import Image from 'next/image';
import { API_ROOT } from '@/config/siteConfig';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { getTranslations } from 'next-intl/server';

export interface InternalPageDetailsProps {
    date: string;
    autores: AutorData[];
}

export const InternalPageDetails = async ({ date, autores }: InternalPageDetailsProps) => {
    const t = await getTranslations('Pages.InternalPage');
    return (
        <Container className="rounded p-3 bg-[--violet-9] grid gap-y-2 sm:flex justify-between">
            {autores.length > 0 ? (
                <div className="grid gap-y-2">
                    <Text className="font-semibold text-violet-300">
                        {autores.length > 1 ? `${t('Authors')}: ` : `${t('Author')}: `}
                    </Text>
                    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {autores.map(async (autor) => {
                            let url;
                            if (
                                autor.attributes.foto.data.attributes.formats !== null &&
                                autor.attributes.foto.data.attributes.formats.thumbnail !== undefined
                            ) {
                                url = `${API_ROOT}${autor.attributes.foto.data.attributes.formats.thumbnail.url}`;
                            } else {
                                url = `${API_ROOT}${autor.attributes.foto.data.attributes.url}`;
                            }
                            const predominantColor: number[] = await getPredominantColor(url);
                            return (
                                <div
                                    className="flex items-center gap-x-2"
                                    key={`internal-page-author-${autor.attributes.slug}`}
                                >
                                    <Link href={`/autores/${autor.attributes.slug}`}>
                                        <Image
                                            className="rounded-full border-4 border-gray-200 dark:border-gray-800 hover:border-0 transition-all"
                                            placeholder="blur"
                                            blurDataURL={rgbDataURL(
                                                predominantColor[0],
                                                predominantColor[1],
                                                predominantColor[2],
                                            )}
                                            src={url}
                                            alt={autor.attributes.nome}
                                            width={50}
                                            height={50}
                                        />
                                    </Link>
                                    <Link
                                        href={`/autores/${autor.attributes.slug}`}
                                        className="text-violet-300 font-semibold hover:text-[--accent-a12] transition"
                                    >
                                        {autor.attributes.nome}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <></>
            )}

            <Text className="text-violet-300 font-semibold content-center">
                {t('Published on')} <DateFormat date={date} />
            </Text>
        </Container>
    );
};
