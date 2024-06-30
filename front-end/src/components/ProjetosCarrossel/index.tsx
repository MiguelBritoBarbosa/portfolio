import { Container } from './styled';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { API_ROOT, API_URL } from '@/config/siteConfig';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { Carrossel } from './carrossel';
import { fetchJson } from '@/utils/fetchJson';
import { TecnologiasData } from '@/config/domain/tecnologias/tecnologias';

interface ProjetosCarrosselProps {
    projetos: ProjetoData[];
}

export const ProjetosCarrossel = async ({ projetos }: ProjetosCarrosselProps) => {
    if (
        projetos[0].attributes.cover === undefined ||
        projetos[0].attributes.autores ||
        projetos[0].attributes.tecnologias
    ) {
        projetos = await Promise.all(
            projetos.map(async (projeto) => {
                const newProjeto: { data: ProjetoData } = await fetchJson(
                    `${API_URL}/projetos/${projeto.id}?populate=cover&populate=autores&populate=tecnologias`,
                );
                projeto.attributes.cover = newProjeto.data.attributes.cover;
                projeto.attributes.autores = newProjeto.data.attributes.autores;
                projeto.attributes.tecnologias = newProjeto.data.attributes.tecnologias;
                return projeto;
            }),
        ).then((projetos) => projetos);
    }
    let predominantColors: any = projetos.map(async (projeto) => {
        const url = `${API_ROOT}${projeto.attributes.cover.data.attributes.formats.thumbnail.url}`;
        return await getPredominantColor(url);
    });
    predominantColors = await Promise.all(predominantColors).then((predominantColor) => predominantColor);
    projetos = await Promise.all(
        projetos.map(async (projeto) => {
            projeto.attributes.tecnologias.data = await Promise.all(
                projeto.attributes.tecnologias.data.map(async (tecnologia) => {
                    const newTecnologia: { data: TecnologiasData } = await fetchJson(
                        `${API_URL}/tecnologias/${tecnologia.id}?populate=icon&`,
                    );
                    return newTecnologia.data;
                }),
            ).then((newTecnologia) => newTecnologia);
            return projeto;
        }),
    ).then((projetos) => projetos);

    return (
        <Container className="row p-3 d-flex justify-content-between rounded">
            <Carrossel projetos={projetos} predominantColors={predominantColors} />
        </Container>
    );
};
