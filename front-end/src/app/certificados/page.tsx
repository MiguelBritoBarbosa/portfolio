import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { meta } from '@/config/domain/meta/meta';
import Certificados from '@/containers/Certificados';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function CertificadosPage({ searchParams }: { searchParams: { query?: string; page: string } }) {
    const t = await getTranslations('Pages.Certificates');
    const certificados: { data: CertificadoData[]; meta: meta } | undefined = await getAllCertificados(
        `&${searchParams.page ? `pagination[page]=${searchParams.page}` : 'pagination[page]=1'}&sort[0]=createdAt:desc&populate=*&`,
    );
    if (certificados !== undefined && certificados.data.length > 0) {
        return (
            <Certificados
                certificados={certificados.data}
                totalPage={certificados.meta.pagination.pageCount}
                page={certificados.meta.pagination.page}
            />
        );
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No Certificates found!')}
            </Heading>
        </div>
    );
}
