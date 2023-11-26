import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import { getAllDestaques } from '@/config/data/destaques/getAllDestaques';
import { getAllPremios } from '@/config/data/premios/getAllPremios';
import Landing from '@/containers/Landing';

export const revalidate = 300;

export default async function LandingPage() {
    const certificados: any = await getAllCertificados();
    const destaques: any = await getAllDestaques('_limit=4');
    const premios: any = await getAllPremios('');
    return (
        <>
            <Landing certificados={certificados.data} destaques={destaques.data} premios={premios.data} />
        </>
    );
}
