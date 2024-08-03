import { CertificadoData } from '@/config/domain/certificados/certificados';
import { CERTIFICADOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getCertificado(slug: string | string[]): Promise<{ data: CertificadoData } | undefined> {
    const locale = await getLocale();
    const url = `${CERTIFICADOS_URL}&locale=${locale}&filters[slug][$eq]=${slug}`;
    const certificado: { data: CertificadoData } = await fetchJson(url);
    return certificado ? (certificado.data ? certificado : undefined) : undefined;
}
