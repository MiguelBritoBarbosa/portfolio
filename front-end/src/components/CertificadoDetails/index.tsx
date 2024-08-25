import { Container } from './styled';
import { StrapiFiles } from '@/config/domain/StrapiFiles/strapifiles';
import { API_PUBLIC_ROOT } from '@/config/siteConfig';
import { Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export interface CertificadoDetailsProps {
    documento: StrapiFiles;
    credencial: string;
}

export const CertificadoDetails = async ({ documento, credencial }: CertificadoDetailsProps) => {
    const t = await getTranslations('Pages.InternalPage.Certificates');
    return (
        <Container className="rounded p-3 bg-gray-200 dark:bg-gray-800 grid gap-3">
            {documento.data !== null && (
                <Text as="p">
                    <a
                        title={t('Click here to download the certificate document')}
                        target="_new"
                        href={`${API_PUBLIC_ROOT}${documento.data.attributes.url}`}
                        className="hover:text-[--accent-a9] transition"
                    >
                        {`${t('Click here to download the certificate document')} `}
                        <i className="bi bi-file-earmark-arrow-down-fill"></i>
                    </a>
                </Text>
            )}
            {credencial && (
                <Text as="p">
                    <a
                        title={t('Click here to access the certificate credential')}
                        target="_new"
                        href={credencial}
                        className="hover:text-[--accent-a9] transition"
                    >
                        {`${t('Click here to access the certificate credential')} `}
                        <i className="bi bi-check2-all"></i>
                    </a>
                </Text>
            )}
        </Container>
    );
};
