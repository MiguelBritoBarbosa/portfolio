import Link from 'next/link';
import { Container } from './styled';
import Image from 'next/image';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { Heading, Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { SVGContainer } from '../SVGContainer';
import { getDescription } from '@/utils/getDescription';

interface CardDestaqueProps {
    destaque: ProjetoData;
}

export const CardDestaque = async ({ destaque }: CardDestaqueProps) => {
    let url;
    let width;
    let height;
    if (
        destaque.attributes.cover.data.attributes.formats !== null &&
        destaque.attributes.cover.data.attributes.formats.small !== undefined
    ) {
        url = `${API_ROOT}${destaque.attributes.cover.data.attributes.formats.small.url}`;
        width = destaque.attributes.cover.data.attributes.formats.small.width;
        height = destaque.attributes.cover.data.attributes.formats.small.height;
    } else {
        url = `${API_ROOT}${destaque.attributes.cover.data.attributes.url}`;
        width = destaque.attributes.cover.data.attributes.width;
        height = destaque.attributes.cover.data.attributes.height;
    }
    const description: string = getDescription(destaque.attributes.descricao);

    const predominantColor = await getPredominantColor(url);
    const t = await getTranslations('Sections.Highlights');
    return (
        <Container className="grid p-2 sm:p-4 shadow rounded bg-white dark:bg-gray-950">
            <Heading as="h3" size="3" className="text-center hover:text-[--accent-a9] transition">
                <Link title={destaque.attributes.titulo} href={`projetos/${destaque.attributes.slug}`}>
                    {destaque.attributes.titulo}
                </Link>
            </Heading>
            <Link
                title={destaque.attributes.titulo}
                className="flex justify-center items-center"
                href={`projetos/${destaque.attributes.slug}`}
            >
                <Image
                    placeholder="blur"
                    blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                    className="border-1 bg-gray-200 border-gray-200 dark:bg-gray-900 rounded p-1 hover:p-0 transition-all"
                    src={url}
                    alt={destaque.attributes.titulo}
                    width={width}
                    height={height}
                    priority
                />
            </Link>
            <div className="mt-1 mb-3">
                <Text as="p">
                    {description + ' '}
                    <Link
                        className="underline hover:text-[--accent-a9] transition"
                        href={`/projetos/${destaque.attributes.slug}`}
                        title={`${t('see more about')}: ${destaque.attributes.titulo}`}
                    >
                        {t('see more')}
                    </Link>
                </Text>
            </div>
            {destaque.attributes.autores.data.length > 0 && (
                <Text as="p">
                    {`${t('Authors')}: `}
                    {destaque.attributes.autores.data.map((autor, index) => {
                        return (
                            <>
                                <Link
                                    key={`${destaque.attributes.slug}autor:${autor.attributes.slug}${index}`}
                                    href={`/autores/${autor.attributes.slug}`}
                                    title={autor.attributes.nome}
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
            )}

            <Text as="p">
                {`${t('Scope')}:`} <Text color="violet">{t(destaque.attributes.tipoProjeto)}</Text>
                {' | '}
                {destaque.attributes.visibilidade !== null && (
                    <>
                        {`${t('Visibility')}:`} <Text color="violet">{t(destaque.attributes.visibilidade)}</Text>
                    </>
                )}
            </Text>
            {destaque.attributes.repositorio !== null && (
                <Text as="p">
                    {`${t('Repository')}: `}
                    <a
                        className="underline hover:text-[--accent-a9] transition break-all"
                        href={destaque.attributes.repositorio}
                        target="_new"
                        title={`${destaque.attributes.titulo} ${t('repository')}`}
                    >
                        {destaque.attributes.repositorio}
                    </a>
                </Text>
            )}
            {destaque.attributes.link !== null && (
                <Text as="p">
                    Link:{' '}
                    <a
                        className="underline hover:text-[--accent-a9] transition break-all"
                        href={destaque.attributes.link}
                        target="_new"
                        title={`${destaque.attributes.titulo} Link`}
                    >
                        {destaque.attributes.link}
                    </a>
                </Text>
            )}

            {destaque.attributes.tecnologias.data.length > 0 && (
                <Text as="p" className="flex flex-wrap items-center gap-2">
                    <Text>{`${t('Technologies')}: `}</Text>
                    {destaque.attributes.tecnologias.data.map((tecnologia) => {
                        const iconUrl = `${API_ROOT}${tecnologia.attributes.icon.data.attributes.url}`;
                        return (
                            <Link
                                key={`destaque${destaque.attributes.slug}tecnologia${tecnologia.attributes.slug}`}
                                href={`/tecnologias/${tecnologia.attributes.slug}`}
                                title={tecnologia.attributes.nome}
                            >
                                {tecnologia.attributes.icon.data.attributes.ext === '.svg' ? (
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
            )}
            {destaque.attributes.bancosDeDados.data.length > 0 && (
                <Text as="p" className="flex flex-wrap items-center gap-2">
                    <Text>{`${t('Database')}: `}</Text>
                    {destaque.attributes.bancosDeDados.data.map((bancoDeDados) => {
                        const iconUrl = `${API_ROOT}${bancoDeDados.attributes.icon.data.attributes.url}`;
                        return (
                            <Link
                                key={`destaque${destaque.attributes.slug}bancoDeDados${bancoDeDados.attributes.slug}`}
                                href={`/banco-de-dados/${bancoDeDados.attributes.slug}`}
                                title={bancoDeDados.attributes.nome}
                            >
                                {bancoDeDados.attributes.icon.data.attributes.ext === '.svg' ? (
                                    <SVGContainer
                                        className="w-8 h-8 hover:text-[--accent-a9] transition"
                                        svgUrl={iconUrl}
                                    />
                                ) : (
                                    <Image
                                        className="max-w-full h-auto"
                                        src={iconUrl}
                                        alt={bancoDeDados.attributes.nome}
                                        width={20}
                                        height={20}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </Text>
            )}
        </Container>
    );
};
