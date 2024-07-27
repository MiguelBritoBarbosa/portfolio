import { CertificadoData } from '@/config/domain/certificados/certificados';
import { CERTIFICADOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllCertificados(query = ''): Promise<{ data: CertificadoData[] } | undefined> {
    const locale = await getLocale();
    const url = `${CERTIFICADOS_URL}&locale=${locale}&${query}`;
    const certificados: { data: CertificadoData[] } = await fetchJson(url);
    return certificados ? (certificados.data ? certificados : undefined) : undefined;
}
