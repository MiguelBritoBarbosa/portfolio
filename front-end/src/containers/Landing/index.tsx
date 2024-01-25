import { ProjetosDestaque } from '@/components/ProjetosDestaque';
import { Container } from './styles';
// import Link from 'next/link';
import { CarrosselCertificados } from '@/components/CarrosselCertificados';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { CardMiguel } from '@/components/CardMiguel';
import { PremiosSlider } from '@/components/PremiosSlider';
import { PremioData } from '@/config/domain/premios/premios';
import { AutorData } from '@/config/domain/autores/autores';
import { ProjetosCarrossel } from '@/components/ProjetosCarrossel';

interface LandingProps {
    certificados: CertificadoData[];
    destaques: ProjetoData[];
    premios: PremioData[];
    projetos: ProjetoData[];
    miguel: AutorData;
}

export default function Landing({ certificados, destaques, premios, projetos, miguel }: LandingProps) {
    return (
        <Container className="container-fluid">
            <div className="row p-3">
                <div className="col-12 col-lg-8 mt-2 order-2 order-lg-1">
                    <h2 className="text-center">Destaques</h2>
                    <ProjetosDestaque destaques={destaques} />
                </div>
                <div className="col-12 col-lg-4 mt-2 order-1 order-lg-2">
                    <h2 className="text-center">Autor</h2>
                    <CardMiguel miguel={miguel} />
                </div>
            </div>
            <h2 className="text-center mt-3">Prêmios</h2>
            <PremiosSlider premios={premios} />
            <h2 className="mt-3 text-center">Certificados</h2>
            <CarrosselCertificados certificados={certificados} />
            <h2 className="mt-3 text-center">Projetos</h2>
            <ProjetosCarrossel projetos={projetos} />
        </Container>
    );
}
