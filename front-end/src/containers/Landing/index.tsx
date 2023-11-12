import { Container } from './styled';
// import Link from 'next/link';
import { CarrosselCertificados } from '@/components/CarrosselCertificados';

interface LandingProps {
    certificados: any;
}

export default function Landing({ certificados }: LandingProps) {
    return (
        <Container className="container-fluid text-center">
            <CarrosselCertificados certificados={certificados} />
        </Container>
    );
}
