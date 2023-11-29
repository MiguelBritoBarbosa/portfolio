import { CertificadoData } from '@/config/domain/certificados/certificados';
import { CERTIFICADOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getCertificado(slug: string | string[]): Promise<CertificadoData> {
    const locale = 'pt-BR';
    const url = `${CERTIFICADOS_URL}/locale=${locale}&filters[slug][$eq]=${slug}`;
    const certificado: CertificadoData = await fetchJson(url);
    return certificado;
}
