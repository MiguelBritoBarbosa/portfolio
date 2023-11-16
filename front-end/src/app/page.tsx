import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import { getAllDestaques } from '@/config/data/destaques/getAllDestaques';
import Landing from '@/containers/Landing';

export default async function LandingPage() {
    const certificados: any = await getAllCertificados();
    const destaques: any = await getAllDestaques('_limit=4');
    return (
        <>
            <Landing certificados={certificados.data} destaques={destaques.data} />
        </>
    );
}
