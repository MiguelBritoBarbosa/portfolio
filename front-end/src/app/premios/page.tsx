import { getAllPremios } from '@/config/data/premios/getAllPremios';
import { meta } from '@/config/domain/meta/meta';
import { PremioData } from '@/config/domain/premios/premios';
import Premios from '@/containers/Premios';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function PremiosPage({ searchParams }: { searchParams: { query?: string; page: string } }) {
    const t = await getTranslations('Pages.Awards');
    const premios: { data: PremioData[]; meta: meta } | undefined = await getAllPremios(
        `&${searchParams.page ? `pagination[page]=${searchParams.page}` : 'pagination[page]=1'}&sort[0]=createdAt:desc&populate=*&`,
    );
    if (premios !== undefined && premios.data.length > 0) {
        return (
            <Premios
                premios={premios.data}
                totalPage={premios.meta.pagination.pageCount}
                page={premios.meta.pagination.page}
            />
        );
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No Awards found!')}
            </Heading>
        </div>
    );
}
