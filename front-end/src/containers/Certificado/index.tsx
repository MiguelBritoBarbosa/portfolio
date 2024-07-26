import { CertificadoData } from '@/config/domain/certificados/certificados';
import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { CertificadoContainer } from '@/components/CertificadoContainer';
import { CertificadoDetails } from '@/components/CertificadoDetails';
import { Heading } from '@radix-ui/themes';

export interface CertificadoProps {
    certificado: CertificadoData;
}

export default function Certificado({ certificado }: CertificadoProps) {
    return (
        <Container id={certificado.attributes.slug} className="container mt-3 p-md-5">
            <Heading>{certificado.attributes.titulo}</Heading>
            <CertificadoContainer
                content={certificado.attributes.descricao}
                titulo={certificado.attributes.titulo}
                url={`${API_ROOT}${certificado.attributes.documento.data.attributes.url}`}
                width={certificado.attributes.documento.data.attributes.formats.medium.width}
                height={certificado.attributes.documento.data.attributes.formats.medium.height}
            />
            <hr />
            <CertificadoDetails
                date={certificado.attributes.createdAt}
                autor={certificado.attributes.autor.data}
                credencial={certificado.attributes.credencial}
            />
        </Container>
    );
}
