import { CertificadoData } from '@/config/domain/certificados/certificados';
import { Container } from './styles';

export interface CertificadoProps {
    certificado: CertificadoData;
}

export default function Certificado({ certificado }: CertificadoProps) {
    return (
        <Container id={certificado.attributes.slug} className="container mt-3 p-5">
            <div>teste</div>
        </Container>
    );
}
