import { getAutor } from '@/config/data/autores/getAutor';
import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import { getAllDestaques } from '@/config/data/destaques/getAllDestaques';
import { getAllPremios } from '@/config/data/premios/getAllPremios';
import { getAllProjetos } from '@/config/data/projetos/getAllProjetos';
import Landing from '@/containers/Landing';

export const revalidate = 300;

export default async function LandingPage() {
    // const certificados: any = await getAllCertificados();
    // const destaques: any = await getAllDestaques('_limit=4');
    // const premios: any = await getAllPremios('');
    // const miguel: any = await getAutor('miguel-brito-barbosa');
    // const projetos: any = await getAllProjetos('filters[destaque][$eq]=false&'); // filters[Destaque][$eq]=false&
    return (
        <>
            <Landing
            // certificados={certificados.data}
            // destaques={destaques.data}
            // premios={premios.data}
            // miguel={miguel.data[0]}
            // projetos={projetos.data}
            />
        </>
    );
}
