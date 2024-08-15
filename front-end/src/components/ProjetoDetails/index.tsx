import Link from 'next/link';
import { Container } from './styled';
import { tipoProjeto, visibilidadeProjeto } from '@/config/domain/projetos/projetos';
import { TecnologiasData } from '@/config/domain/tecnologias/tecnologias';
import { BancosDeDadosData } from '@/config/domain/bancos-de-dados/bancosDeDados';
import { Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { API_ROOT } from '@/config/siteConfig';
import { SVGContainer } from '../SVGContainer';

export interface ProjetoDetailsProps {
    tipoProjeto: tipoProjeto;
    link: string;
    repositorio: string;
    visibilidade: visibilidadeProjeto;
    tecnologias: TecnologiasData[];
    bancosDeDados: BancosDeDadosData[];
}

export const ProjetoDetails = async ({
    tipoProjeto,
    link,
    repositorio,
    visibilidade,
    tecnologias,
    bancosDeDados,
}: ProjetoDetailsProps) => {
    const t = await getTranslations('Pages.InternalPage.Projects');
    return (
        <Container className="rounded p-3 bg-gray-200 dark:bg-gray-800 grid gap-3">
            <Text as="p">
                {`${t('Project scope')}:`} <Text color="violet">{tipoProjeto}</Text>
                {' | '}
                {visibilidade !== null && (
                    <>
                        {`${t('Source code visibility')}:`} <Text color="violet">{visibilidade}</Text>
                    </>
                )}
            </Text>
            {repositorio !== null && (
                <Text as="p">
                    {`${t('Project repository')}: `}
                    <a
                        className="underline hover:text-[--accent-a9] transition break-all"
                        href={repositorio}
                        target="_new"
                        title={t('Project repository')}
                    >
                        {repositorio}
                    </a>
                </Text>
            )}
            {link !== null && (
                <Text as="p">
                    {`${t('Link to the online project')}: `}
                    <a
                        className="underline hover:text-[--accent-a9] transition break-all"
                        href={link}
                        target="_new"
                        title={t('Link to the online project')}
                    >
                        {link}
                    </a>
                </Text>
            )}

            {tecnologias.length > 0 && (
                <Text as="p" className="flex flex-wrap items-center gap-2">
                    <Text>{`${t('Technologies used in the project')}: `}</Text>
                    {tecnologias.map((tecnologia) => {
                        const iconUrl = `${API_ROOT}${tecnologia.attributes.icon.data.attributes.url}`;
                        return (
                            <Link
                                key={`technology-${tecnologia.attributes.slug}`}
                                href={`/tecnologias/${tecnologia.attributes.slug}`}
                                title={tecnologia.attributes.nome}
                            >
                                {tecnologia.attributes.icon.data.attributes.ext === '.svg' ? (
                                    <SVGContainer
                                        className="w-12 h-12 hover:text-[--accent-a9] transition"
                                        svgUrl={iconUrl}
                                    />
                                ) : (
                                    <Image
                                        className="max-w-full h-auto"
                                        src={iconUrl}
                                        alt={tecnologia.attributes.nome}
                                        width={48}
                                        height={48}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </Text>
            )}
            {bancosDeDados.length > 0 && (
                <Text as="p" className="flex flex-wrap items-center gap-2">
                    <Text>{`${t('Database used in the project')}: `}</Text>
                    {bancosDeDados.map((bancoDeDados) => {
                        const iconUrl = `${API_ROOT}${bancoDeDados.attributes.icon.data.attributes.url}`;
                        return (
                            <Link
                                key={`database-${bancoDeDados.attributes.slug}`}
                                href={`/banco-de-dados/${bancoDeDados.attributes.slug}`}
                                title={bancoDeDados.attributes.nome}
                            >
                                {bancoDeDados.attributes.icon.data.attributes.ext === '.svg' ? (
                                    <SVGContainer
                                        className="w-12 h-12 hover:text-[--accent-a9] transition"
                                        svgUrl={iconUrl}
                                    />
                                ) : (
                                    <Image
                                        className="max-w-full h-auto"
                                        src={iconUrl}
                                        alt={bancoDeDados.attributes.nome}
                                        width={48}
                                        height={48}
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
