import { AutorData } from '@/config/domain/autores/autores';
import { Container } from './styles';
import { API_ROOT } from '@/config/siteConfig';
import { AutorContainer } from '@/components/AutorContainer';
import { AutorDetails } from '@/components/AutorDetails';
import { ProjetosCarrossel } from '@/components/ProjetosCarrossel';
import { Heading } from '@radix-ui/themes';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { getTranslations } from 'next-intl/server';
import { PostData } from '@/config/domain/posts/posts';
import { UltimasPostagens } from '@/components/UltimasPostagens';

export interface AutorProps {
    autor: AutorData;
}

export default async function Autor({ autor }: AutorProps) {
    const t = await getTranslations('Pages.InternalPage.AuthorsPage');
    let url;
    let width;
    let height;
    if (
        autor.attributes.foto.data.attributes.formats !== null &&
        autor.attributes.foto.data.attributes.formats.small !== undefined
    ) {
        url = `${API_ROOT}${autor.attributes.foto.data.attributes.formats.small.url}`;
        width = autor.attributes.foto.data.attributes.formats.small.width;
        height = autor.attributes.foto.data.attributes.formats.small.height;
    } else {
        url = autor.attributes.foto.data.attributes.url;
        width = autor.attributes.foto.data.attributes.width;
        height = autor.attributes.foto.data.attributes.height;
    }
    const predominantColor: number[] = await getPredominantColor(url);
    const projetos: ProjetoData[] = autor.attributes.projetos.data;
    const posts: PostData[] = autor.attributes.posts.data;
    let ProjetosCarrosselPredominantColors: any;
    let UltimasPostagensPredominantColors: any;
    if (projetos !== undefined && projetos.length > 0) {
        ProjetosCarrosselPredominantColors = projetos.map(async (projeto) => {
            const url = `${API_ROOT}${projeto.attributes.cover.data.attributes.formats.thumbnail.url}`;
            return await getPredominantColor(url);
        });
        ProjetosCarrosselPredominantColors = await Promise.all(ProjetosCarrosselPredominantColors).then(
            (predominantColor) => predominantColor,
        );
    }
    if (posts !== undefined && posts.length > 0) {
        UltimasPostagensPredominantColors = posts.map(async (post) => {
            const url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.formats.thumbnail.url}`;
            return await getPredominantColor(url);
        });
        UltimasPostagensPredominantColors = await Promise.all(UltimasPostagensPredominantColors).then(
            (predominantColor) => predominantColor,
        );
    }
    return (
        <Container className="">
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {autor.attributes.nome}
            </Heading>
            <section className="container mx-auto py-8 grid px-2 sm:px-4 gap-4 sm:rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                <AutorContainer
                    content={autor.attributes.apresentacao}
                    title={autor.attributes.titulo}
                    nome={autor.attributes.nome}
                    url={url}
                    predominantColor={predominantColor}
                    width={width}
                    height={height}
                />
                <AutorDetails
                    experiencias={autor.attributes.experiencias.data}
                    gitHub={autor.attributes.github}
                    linkedin={autor.attributes.linkedin}
                    site={autor.attributes.site}
                    curriculos={autor.attributes.curriculos.data}
                />
            </section>
            {projetos !== undefined && projetos.length > 0 && (
                <ProjetosCarrossel
                    projetos={projetos}
                    sectionData={{
                        id: autor.id,
                        __component: '',
                        metadados: {
                            nome: `${t('Projects made by')}: ${autor.attributes.nome}`,
                            slug: '',
                            imagemDeFundo: false,
                        },
                    }}
                    predominantColors={ProjetosCarrosselPredominantColors}
                />
            )}
            {posts !== undefined && posts.length > 0 && (
                <UltimasPostagens
                    posts={posts}
                    sectionData={{
                        id: autor.id,
                        __component: '',
                        metadados: {
                            nome: `${t('Posts made by')}: ${autor.attributes.nome}`,
                            slug: '',
                            imagemDeFundo: false,
                        },
                    }}
                    predominantColors={UltimasPostagensPredominantColors}
                />
            )}
        </Container>
    );
}
