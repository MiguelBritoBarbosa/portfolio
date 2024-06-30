import { CertificadoData } from '@/config/domain/certificados/certificados';
import { DataUndefined } from '@/config/domain/dataUndefined';
import { CERTIFICADOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';

export async function getAllCertificados(query = ''): Promise<CertificadoData[] | DataUndefined> {
    const locale = 'pt-BR';
    const url = `${CERTIFICADOS_URL}/locale=${locale}&${query}`;
    const certificados: CertificadoData[] = await fetchJson(url);
    return certificados !== null ? certificados : { data: [undefined] };
}
