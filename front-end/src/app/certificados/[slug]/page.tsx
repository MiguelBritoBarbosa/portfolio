import { getCertificado } from '@/config/data/certificados/getCertificado';
import Certificado from '@/containers/Certificado';

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const certificado: any = await getCertificado(params.slug);
    return {
        title: certificado.data[0].attributes.Titulo,
        description: certificado.data[0].attributes.Descricao[0].slice(0, 100),
    };
}

export default async function CertificadoPage({ params }: { params: { slug: string } }) {
    const certificado: any = await getCertificado(params.slug);
    return (
        <>
            <Certificado certificado={certificado.data[0]} />
        </>
    );
}
