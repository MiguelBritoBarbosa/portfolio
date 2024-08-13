import { BancosDeDadosData } from '@/config/domain/bancos-de-dados/bancosDeDados';
import { BANCO_DE_DADOS_URL } from '@/config/siteConfig';
import { fetchJson } from '@/utils/fetchJson';
import { getLocale } from 'next-intl/server';

export async function getAllBancosDeDados(query = ''): Promise<{ data: BancosDeDadosData[] } | undefined> {
    const locale = await getLocale();
    const url = `${BANCO_DE_DADOS_URL}&locale=${locale}&${query}`;
    const bancosDeDados: { data: BancosDeDadosData[] } = await fetchJson(url);
    return bancosDeDados ? (bancosDeDados.data ? bancosDeDados : undefined) : undefined;
}
