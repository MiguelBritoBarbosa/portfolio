import { CertificadoData } from '@/config/domain/certificados/certificados';
import { meta } from '@/config/domain/meta/meta';
import { CERTIFICADOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllCertificados(query = ''): Promise<{ data: CertificadoData[]; meta: meta } | undefined> {
    const locale = await getLocale();
    const url = `${CERTIFICADOS_URL}&locale=${locale}&${query}`;
    const certificados: { data: CertificadoData[]; meta: meta } = await fetchJson(url);
    return certificados ? (certificados.data ? certificados : undefined) : undefined;
}
