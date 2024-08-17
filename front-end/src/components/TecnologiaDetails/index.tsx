import { DateFormat } from '../DateFormat';
import { Container } from './styled';
import { Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { tipoTecnologia } from '@/config/domain/tecnologias/tecnologias';
import { tipoBanco } from '@/config/domain/bancos-de-dados/bancosDeDados';

export interface InternalPageDetailsProps {
    date: string;
    tipo: tipoTecnologia | tipoBanco;
}

export const TecnologiaDetails = async ({ date, tipo }: InternalPageDetailsProps) => {
    const t = await getTranslations('Pages.InternalPage.Technologies');
    return (
        <Container className="rounded p-3 dark:bg-[#331b71] bg-violet-300 grid gap-y-2 gap-x-6 sm:flex justify-between">
            {tipo !== undefined && (
                <Text as="p" className="content-center">
                    {`${t('Type')}: `}
                    <Text className="dark:text-violet-300 text-[#331b71] font-semibold">{t(tipo)}</Text>
                </Text>
            )}

            <Text className="dark:text-violet-300 text-[#331b71] font-semibold content-center">
                {t('Published on')} <DateFormat date={date} />
            </Text>
        </Container>
    );
};
