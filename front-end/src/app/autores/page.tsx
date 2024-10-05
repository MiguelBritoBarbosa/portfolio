import { getAllAutores } from '@/config/data/autores/getAllAutores';
import { AutorData } from '@/config/domain/autores/autores';
import { meta } from '@/config/domain/meta/meta';
import Autores from '@/containers/Autores';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function AutoresPage({ searchParams }: { searchParams: { query?: string; page: string } }) {
    const t = await getTranslations('Pages.Authors');
    const autores: { data: AutorData[]; meta: meta } | undefined = await getAllAutores(
        `&${searchParams.page ? `pagination[page]=${searchParams.page}` : 'pagination[page]=1'}&populate=*`,
    );
    if (autores !== undefined && autores.data.length > 0) {
        return (
            <Autores
                autores={autores.data}
                totalPage={autores.meta.pagination.pageCount}
                page={autores.meta.pagination.page}
            />
        );
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No authors found!')}
            </Heading>
        </div>
    );
}
