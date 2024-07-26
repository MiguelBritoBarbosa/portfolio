import Link from 'next/link';
import { Container } from './styled';
import Image from 'next/image';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { API_ROOT, API_URL } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { fetchJson } from '@/utils/fetchJson';
import { TecnologiasData } from '@/config/domain/tecnologias/tecnologias';
import { Heading, Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { SVGContainer } from '../SVGContainer';

interface ProjetosDestaqueProps {
    destaques: ProjetoData[];
}

export const ProjetosDestaque = async ({ destaques }: ProjetosDestaqueProps) => {
    if (destaques) {
        const t = await getTranslations('Sections.Highlights');
        return (
            <Container className="grid md:grid-cols-2 p-2 sm:p-4 gap-4 rounded bg-gray-200 dark:bg-gray-800">
                {destaques.map(async (destaque) => {
                    const url = `${API_ROOT}${destaque.attributes.cover.data.attributes.formats.small.url}`;
                    const width = destaque.attributes.cover.data.attributes.formats.small.width;
                    const height = destaque.attributes.cover.data.attributes.formats.small.height;
                    const description: any = destaque.attributes.descricao[0].children[0];

                    const predominantColor = await getPredominantColor(url);

                    return (
                        <div key={destaque.id} className="grid p-2 sm:p-4 shadow rounded bg-white dark:bg-gray-950">
                            <Heading as="h4" size="3" className="text-center hover:text-[--accent-a9] transition">
                                <Link href={`/${destaque.attributes.slug}`}>{destaque.attributes.titulo}</Link>
                            </Heading>
                            <Link href={`/${destaque.attributes.slug}`}>
                                <Image
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL(
                                        predominantColor[0],
                                        predominantColor[1],
                                        predominantColor[2],
                                    )}
                                    className="border-1 bg-gray-200 border-gray-200 dark:bg-gray-900 rounded p-1 hover:p-0 transition-all"
                                    src={url}
                                    alt={destaque.attributes.titulo}
                                    width={width}
                                    height={height}
                                />
                            </Link>
                            <div className="mt-1 mb-3">
                                <Text as="p">
                                    {description.text.split(' ').splice(0, 42).join(' ')}
                                    {description.text.split(' ').length > 42 ? <>...</> : <></>}
                                </Text>
                                <Link
                                    className="underline hover:text-[--accent-a9] transition"
                                    href={`/projetos/${destaque.attributes.slug}`}
                                >
                                    {t('see more')}
                                </Link>
                            </div>
                            <Text as="p">
                                {`${t('Authors')}: `}
                                {destaque.attributes.autores.data.map((autor, index) => {
                                    return (
                                        <>
                                            <Link
                                                key={`${destaque.attributes.slug}autor:${autor.attributes.slug}${index}`}
                                                href={`/autores/${autor.attributes.slug}`}
                                            >
                                                <Text color="violet" className="hover:text-[--accent-a12] transition">
                                                    {autor.attributes.nome}
                                                </Text>
                                            </Link>
                                            {index !== destaque.attributes.autores.data.length - 1 ? <> | </> : <></>}
                                        </>
                                    );
                                })}
                            </Text>
                            <Text as="p">
                                {`${t('Scope')}:`} <Text color="violet">{destaque.attributes.tipoProjeto}</Text>
                                {' | '}
                                {`${t('Visibility')}:`} <Text color="violet">{destaque.attributes.visibilidade}</Text>
                            </Text>
                            <Text as="p">
                                {destaque.attributes.repositorio !== null && (
                                    <Text>
                                        {`${t('Repository')}: `}
                                        <a
                                            className="underline hover:text-[--accent-a9] transition"
                                            href={destaque.attributes.link}
                                            target=" _blank"
                                        >
                                            {destaque.attributes.repositorio}
                                        </a>
                                    </Text>
                                )}
                                {destaque.attributes.repositorio !== null && destaque.attributes.link !== null && (
                                    <> | </>
                                )}
                                {destaque.attributes.link !== null && (
                                    <Text>
                                        Link:{' '}
                                        <a
                                            className="underline hover:text-[--accent-a9] transition"
                                            href={destaque.attributes.link}
                                            target=" _blank"
                                        >
                                            {destaque.attributes.link}
                                        </a>
                                    </Text>
                                )}
                            </Text>
                            <Text as="p" className="flex flex-wrap items-center gap-2">
                                <Text>{`${t('Technologies')}: `}</Text>
                                {destaque.attributes.tecnologias.data.map(async (tecnologia) => {
                                    const tecnologiaIcon: { data: TecnologiasData } = await fetchJson(
                                        `${API_URL}/tecnologias/${tecnologia.id}?populate=icon&`,
                                    );
                                    const iconUrl = `${API_ROOT}${tecnologiaIcon.data.attributes.icon.data.attributes.url}`;
                                    return (
                                        <Link
                                            key={`destaque${destaque.id}tecnologia${tecnologia.id}`}
                                            href={`/tecnologias/${tecnologia.attributes.slug}`}
                                        >
                                            {tecnologiaIcon.data.attributes.icon.data.attributes.ext === '.svg' ? (
                                                <SVGContainer
                                                    className="w-8 h-8 hover:text-[--accent-a9] transition"
                                                    svgUrl={iconUrl}
                                                />
                                            ) : (
                                                <Image
                                                    className="max-w-full h-auto"
                                                    src={iconUrl}
                                                    alt={tecnologia.attributes.nome}
                                                    width={20}
                                                    height={20}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </Text>
                        </div>
                    );
                })}
            </Container>
        );
    } else {
        return <></>;
    }
};
