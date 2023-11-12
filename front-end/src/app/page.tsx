import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import Landing from '@/containers/Landing';

export default async function LandingPage() {
    const certificados: any = await getAllCertificados();
    return (
        <>
            <Landing certificados={certificados.data} />
        </>
    );
}
