import { CertificadoData } from '@/config/domain/certificados/certificados';
import { Container } from './styles';
import { Heading } from '@/components/Heading';
import { API_ROOT } from '@/config/siteConfig';
import { CertificadoContainer } from '@/components/CertificadoContainer';
import { SimpleDetails } from '@/components/SimpleDetails';

export interface CertificadoProps {
    certificado: CertificadoData;
}

export default function Certificado({ certificado }: CertificadoProps) {
    return (
        <Container id={certificado.attributes.slug} className="container mt-3 p-5">
            <Heading>{certificado.attributes.Titulo}</Heading>
            <CertificadoContainer
                content={certificado.attributes.Descricao}
                titulo={certificado.attributes.Titulo}
                url={`${API_ROOT}${certificado.attributes.documento.data.attributes.url}`}
                width={certificado.attributes.documento.data.attributes.formats.medium.width}
                height={certificado.attributes.documento.data.attributes.formats.medium.height}
            />
            <hr />
            <SimpleDetails date={certificado.attributes.createdAt} autor={certificado.attributes.autor.data} />
        </Container>
    );
}
