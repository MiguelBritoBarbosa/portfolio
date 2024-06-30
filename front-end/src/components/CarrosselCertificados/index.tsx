import { Container } from './styled';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { API_ROOT } from '@/config/siteConfig';
import { Carrossel } from './carrossel';
import { getPredominantColor } from '@/utils/getPredominantColor';

interface CarrosselCertificadosProps {
    certificados: CertificadoData[];
}

export const CarrosselCertificados = async ({ certificados }: CarrosselCertificadosProps) => {
    let predominantColors: any = certificados.map(async (certificado) => {
        const url = `${API_ROOT}${certificado.attributes.documento.data.attributes.formats.thumbnail.url}`;
        return await getPredominantColor(url);
    });
    predominantColors = await Promise.all(predominantColors).then((predominantColor) => predominantColor);
    return (
        <Container className="row d-flex my-3">
            <div className="container-fluid">
                <Carrossel certificados={certificados} predominantColors={predominantColors} />
            </div>
        </Container>
    );
};
