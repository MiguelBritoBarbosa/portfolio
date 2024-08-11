import { DateFormat } from '../DateFormat';
import { Container } from './styled';
import { Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { tipoTecnologia } from '@/config/domain/tecnologias/tecnologias';
import { tipoBanco } from '@/config/domain/bancos de dados/bancosDeDados';

export interface InternalPageDetailsProps {
    date: string;
    tipo: tipoTecnologia | tipoBanco;
}

export const TecnologiaDetails = async ({ date, tipo }: InternalPageDetailsProps) => {
    const t = await getTranslations('Pages.InternalPage');
    return (
        <Container className="rounded p-3 bg-[--violet-9] grid gap-y-2 gap-x-6 sm:flex justify-between">
            {tipo !== undefined && (
                <Text as="p" className="text-white content-center">
                    {`${t('Type')}: `}
                    <Text className="text-violet-300 font-semibold">{tipo}</Text>
                </Text>
            )}

            <Text className="text-violet-300 font-semibold content-center">
                {t('Published on')} <DateFormat date={date} />
            </Text>
        </Container>
    );
};
