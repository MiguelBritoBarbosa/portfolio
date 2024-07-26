'use client';
import Link from 'next/link';
import { ContainerFooter, LineTopic } from './styled';
import { Heading, IconButton } from '@radix-ui/themes';
import { footerData } from '@/config/domain/footer/footer';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useTranslations } from 'next-intl';

interface footerProps {
    footerData: footerData | null;
}

export const Footer = ({ footerData }: footerProps) => {
    const t = useTranslations('Footer');
    return (
        <ContainerFooter className="text-center bg-gray-200 dark:bg-gray-800">
            {footerData !== null && (
                <section className="grid md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,2fr] gap-x-20 mx-auto p-2 sm:p-4 max-w-full md:text-start mt-5">
                    {footerData.attributes.paragrafo !== null && (
                        <div className="mb-4">
                            <Heading as="h3" size="3" className="uppercase font-[600]">
                                {footerData.attributes.paragrafo.titulo}
                            </Heading>
                            <LineTopic className="mb-4 mt-0 mx-auto md:mx-0" />
                            <BlocksRenderer
                                blocks={{
                                    link: ({ children, url }) => (
                                        <a
                                            className="underline hover:text-[--accent-a9] transition"
                                            target="_new"
                                            href={url}
                                        >
                                            {children}
                                        </a>
                                    ),
                                }}
                                content={footerData.attributes.paragrafo.descricao}
                            />
                        </div>
                    )}
                    {footerData.attributes.conteudo !== null && (
                        <div className="mb-4">
                            <Heading as="h3" size="3" className="uppercase font-[600]">
                                {footerData.attributes.conteudo.titulo}
                            </Heading>
                            <LineTopic className="mb-4 mt-0 mx-auto md:mx-0" />
                            {footerData.attributes.conteudo.links.map((link) => (
                                <p key={link.id} className="mb-1">
                                    <Link href={link.url} className="hover:underline">
                                        {link.rotulo}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    )}
                    {footerData.attributes.paginas !== null && (
                        <div className="mb-4">
                            <Heading as="h3" size="3" className="uppercase font-[600]">
                                {footerData.attributes.paginas.titulo}
                            </Heading>
                            <LineTopic className="mb-4 mt-0 mx-auto md:mx-0" />
                            {footerData.attributes.paginas.links.map((link) => (
                                <p key={link.id} className="mb-1">
                                    <Link href={link.url} className="hover:underline">
                                        {link.rotulo}
                                    </Link>
                                </p>
                            ))}
                        </div>
                    )}
                    {footerData.attributes.contato !== null && (
                        <div className="mb-md-0 mb-4">
                            <Heading as="h3" size="3" className="uppercase font-[600]">
                                {t('Contact')}
                            </Heading>
                            <LineTopic className="mb-4 mt-0 mx-auto md:mx-0" />
                            {footerData.attributes.contato.endereco !== null && (
                                <p className="mb-1">
                                    <i className="bi bi-buildings"></i> {footerData.attributes.contato.endereco}
                                </p>
                            )}
                            {footerData.attributes.contato.emailDeContato !== null && (
                                <p className="mb-1">
                                    <i className="bi bi-envelope"></i> {footerData.attributes.contato.emailDeContato}
                                </p>
                            )}
                            {footerData.attributes.contato.telefone !== null && (
                                <p className="mb-1">
                                    <i className="bi bi-phone"></i> {footerData.attributes.contato.telefone}
                                </p>
                            )}
                        </div>
                    )}
                </section>
            )}
            <hr className="mb-4 border-gray-300" />
            {footerData !== null && footerData.attributes.redesSociais !== null && (
                <section className="flex justify-center items-center gap-x-2 py-3 bg-[--accent-a9]">
                    {footerData.attributes.redesSociais.map((redeSocial) => (
                        <IconButton
                            key={redeSocial.id}
                            className="cursor-pointer text-lg hover:text-[--accent-surface] hover:bg-[--accent-12] transition dark:hover:text-[--violet-4]"
                            variant="surface"
                            color="gray"
                            highContrast
                            radius="small"
                            size="3"
                        >
                            <a href={redeSocial.link} role="button">
                                <i className={`bi bi-${redeSocial.rede}`}></i>
                            </a>
                        </IconButton>
                    ))}
                </section>
            )}
            <section className="text-center py-3 bg-gray-200 dark:bg-gray-800">
                <i className="bi bi-c-circle"></i> {new Date().getFullYear()} Copyright:{' '}
                <a className="hover:underline" href="https://miguelbritobarbosa.com/">
                    Miguel Brito Barbosa
                </a>
            </section>
        </ContainerFooter>
    );
};
