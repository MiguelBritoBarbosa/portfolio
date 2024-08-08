import { getAllPremios } from '@/config/data/premios/getAllPremios';
import { PremioData } from '@/config/domain/premios/premios';
import Premios from '@/containers/Premios';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function PremiosPage() {
    const t = await getTranslations('Pages.Awards');
    const premios: { data: PremioData[] } | undefined = await getAllPremios('populate=*&');
    if (premios !== undefined && premios.data.length > 0) {
        return <Premios premios={premios.data} />;
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center mb-2" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No Awards found!')}
            </Heading>
        </div>
    );
}
