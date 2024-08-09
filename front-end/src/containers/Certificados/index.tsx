import { Heading, Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { Container } from './styled';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { API_ROOT } from '@/config/siteConfig';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import Link from 'next/link';
import Image from 'next/image';

interface CertificadosProps {
    certificados: CertificadoData[];
}

export default async function Certificados({ certificados }: CertificadosProps) {
    const t = await getTranslations('Pages.Certificates');
    return (
        <Container>
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('Certificates I have received')}
            </Heading>
            <section className="container mx-auto py-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                {certificados.map(async (certificado) => {
                    let url;
                    let width;
                    let height;
                    if (
                        certificado.attributes.cover.data.attributes.formats !== null &&
                        certificado.attributes.cover.data.attributes.formats.small !== undefined
                    ) {
                        url = `${API_ROOT}${certificado.attributes.cover.data.attributes.formats.small.url}`;
                        width = certificado.attributes.cover.data.attributes.formats.small.width;
                        height = certificado.attributes.cover.data.attributes.formats.small.height;
                    } else {
                        url = `${API_ROOT}${certificado.attributes.cover.data.attributes.url}`;
                        width = certificado.attributes.cover.data.attributes.width;
                        height = certificado.attributes.cover.data.attributes.height;
                    }
                    const predominantColor: number[] = await getPredominantColor(url);
                    return (
                        <div
                            key={`certificates-page-${certificado.attributes.slug}`}
                            className="grid gap-3 items-start p-2 sm:p-3 rounded bg-white dark:bg-gray-950"
                        >
                            <Link
                                className="flex justify-center items-center"
                                href={`/certificados/${certificado.attributes.slug}`}
                                title={certificado.attributes.titulo}
                            >
                                <Image
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL(
                                        predominantColor[0],
                                        predominantColor[1],
                                        predominantColor[2],
                                    )}
                                    className="border-1 bg-gray-200 border-gray-200 dark:bg-gray-900 rounded p-1 hover:p-0 transition-all"
                                    src={url}
                                    alt={certificado.attributes.titulo}
                                    width={width}
                                    height={height}
                                />
                            </Link>
                            <Heading as="h3" className="text-center" size={'4'}>
                                <Link
                                    className="hover:text-[--accent-a9] transition"
                                    href={`/certificado/${certificado.attributes.slug}`}
                                    title={certificado.attributes.titulo}
                                >
                                    {certificado.attributes.titulo}
                                </Link>
                            </Heading>
                            {certificado.attributes.documento.data !== null && (
                                <Text as="p">
                                    <a
                                        title={t('Download the certificate')}
                                        target="_new"
                                        href={certificado.attributes.documento.data.attributes.url}
                                        className="hover:text-[--accent-a9] transition"
                                    >
                                        {`${t('Document')} `}
                                        <i className="bi bi-file-earmark-arrow-down-fill"></i>
                                    </a>
                                </Text>
                            )}
                            {certificado.attributes.credencial && (
                                <Text as="p">
                                    <a
                                        title={t('Link to credential')}
                                        target="_new"
                                        href={certificado.attributes.credencial}
                                        className="hover:text-[--accent-a9] transition"
                                    >
                                        {`${t('Credential')} `}
                                        <i className="bi bi-check2-all"></i>
                                    </a>
                                </Text>
                            )}
                            {certificado.attributes.autor.data !== null && (
                                <Text as="p">
                                    {`${t('Author')}: `}
                                    <Link
                                        key={`${certificado.attributes.slug}autor-${certificado.attributes.autor.data.attributes.slug}`}
                                        href={`/autores/${certificado.attributes.autor.data.attributes.slug}`}
                                        title={certificado.attributes.autor.data.attributes.nome}
                                    >
                                        <Text color="violet" className="hover:text-[--accent-a12] transition">
                                            {certificado.attributes.autor.data.attributes.nome}
                                        </Text>
                                    </Link>
                                </Text>
                            )}
                        </div>
                    );
                })}
            </section>
        </Container>
    );
}
