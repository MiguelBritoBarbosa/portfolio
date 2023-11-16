import { ProjetosDestaque } from '@/components/ProjetosDestaque';
import { Container } from './styled';
// import Link from 'next/link';
import { CarrosselCertificados } from '@/components/CarrosselCertificados';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { CardMiguel } from '@/components/CardMiguel';

interface LandingProps {
    certificados: CertificadoData[];
    destaques: ProjetoData[];
}

export default function Landing({ certificados, destaques }: LandingProps) {
    return (
        <Container className="container-fluid">
            <div className="row p-3">
                <div className="col-12 col-lg-8 mt-2 order-2 order-lg-1">
                    <h2 className="text-center">Destaques</h2>
                    <ProjetosDestaque destaques={destaques} />
                </div>
                <div className="col-12 col-lg-4 order-1 order-lg-2">
                    <h2 className="text-center">Autor</h2>
                    <CardMiguel />
                </div>
            </div>
            <h2 className="mt-3 text-center">Certificados</h2>
            <CarrosselCertificados certificados={certificados} />
        </Container>
    );
}
