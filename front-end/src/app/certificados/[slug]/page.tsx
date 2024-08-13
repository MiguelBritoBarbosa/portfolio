import { getCertificado } from '@/config/data/certificados/getCertificado';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import Certificado from '@/containers/Certificado';
import { getDescription } from '@/utils/getDescription';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const certificado: { data: CertificadoData[] } | undefined = await getCertificado(params.slug);
    if (certificado !== undefined && certificado.data.length > 0) {
        return {
            title: certificado.data[0].attributes.titulo,
            description: getDescription(certificado.data[0].attributes.descricao),
        };
    } else {
        return notFound();
    }
}

export default async function CertificadoPage({ params }: { params: { slug: string } }) {
    const certificado: any = await getCertificado(
        params.slug,
        'populate[autor][fields][0]=nome&populate[autor][fields][1]=slug&populate[autor][populate][foto][fields][0]=*&populate[cover][fields]=*&populate[documento][fields]=*',
    );
    return (
        <>
            <Certificado certificado={certificado.data[0]} />
        </>
    );
}
