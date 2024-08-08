import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import Certificados from '@/containers/Certificados';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

export default async function CertificadosPage() {
    const t = await getTranslations('Pages.Certificates');
    const certificados: { data: CertificadoData[] } | undefined = await getAllCertificados('populate=*&');
    if (certificados !== undefined && certificados.data.length > 0) {
        return <Certificados certificados={certificados.data} />;
    }
    return (
        <div className="container mx-auto">
            <Heading className="text-center mb-2" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('No Certificates found!')}
            </Heading>
        </div>
    );
}
