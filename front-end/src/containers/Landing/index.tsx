import { SectionData } from '@/config/domain/pages/sections/sections';
import { Container } from './styles';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { ProjetosDestaque } from '@/components/ProjetosDestaque';
import { HighlightsData } from '@/config/domain/pages/sections/highlights';
import { AwardsData } from '@/config/domain/pages/sections/awards';
import { CardAutorDestaque } from '@/components/CardAutorDestaque';
import { getAllPremios } from '@/config/data/premios/getAllPremios';
import { PremiosSlider } from '@/components/PremiosSlider';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { PremioData } from '@/config/domain/premios/premios';
import { API_ROOT } from '@/config/siteConfig';
import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import { CertificatesData } from '@/config/domain/pages/sections/certificates';
import { CarrosselCertificados } from '@/components/CarrosselCertificados';
import { ProjetosCarrossel } from '@/components/ProjetosCarrossel';
import { ProjectsData } from '@/config/domain/pages/sections/projects';
import { getAllProjetos } from '@/config/data/projetos/getAllProjetos';
import { getAllPosts } from '@/config/data/posts/getAllPosts';
import { PostsData } from '@/config/domain/pages/sections/posts';
import { UltimasPostagens } from '@/components/UltimasPostagens';
import { CertificadoData } from '@/config/domain/certificados/certificados';
import { ProjetoData } from '@/config/domain/projetos/projetos';
import { PostData } from '@/config/domain/posts/posts';

interface LandingProps {
    sections: SectionData[] | undefined;
}

export default async function Landing({ sections }: LandingProps) {
    const t = await getTranslations('Pages');
    if (sections === undefined) {
        return (
            <Container className="container mx-auto">
                <Heading as="h2">{t('No sections found!')}</Heading>
            </Container>
        );
    }

    let projectsParameters = 'sort[0]=createdAt:desc&populate[cover][fields][0]=*';
    if (sections.some((section) => section.__component === 'section.destaques')) {
        sections.map((section) => {
            if (section.__component === 'section.destaques') {
                (section as HighlightsData).projetos.data.map((project) => {
                    projectsParameters += `&filters[id][$notIn]=${project.id}`;
                });
            }
        });
    }
    return (
        <Container className="w-full">
            {sections.map(async (section) => {
                switch (section.__component) {
                    case 'section.destaques':
                        section = section as HighlightsData;
                        return (
                            <section className="container mx-auto py-8 gap-5">
                                <Heading as="h2" className="mb-4 text-center" size={{ initial: '6', sm: '7', md: '8' }}>
                                    {section.metadados.nome}
                                </Heading>
                                <div className="grid lg:grid-cols-[4fr,2fr]">
                                    {(section as HighlightsData).projetos.data.length > 0 ? (
                                        <div className="order-2 lg:order-1 p-2">
                                            <Heading
                                                as="h3"
                                                className="text-center mb-2"
                                                size={{ initial: '5', sm: '6', md: '7' }}
                                            >
                                                {(section as HighlightsData).destaquesTitulo}
                                            </Heading>
                                            <ProjetosDestaque destaques={(section as HighlightsData).projetos.data} />
                                        </div>
                                    ) : (
                                        <Heading as="h3" className="text-center mb-2">
                                            {t('No highlight projects found!')}
                                        </Heading>
                                    )}
                                    {(section as HighlightsData).autorDestaque.data !== null ? (
                                        <div className="grid grid-rows-[min-content] items-start justify-center order-1 lg:order-2  p-2">
                                            <Heading
                                                as="h3"
                                                size={{ initial: '5', sm: '6', md: '7' }}
                                                className="text-center mb-2"
                                            >
                                                {(section as HighlightsData).autorTitulo}
                                            </Heading>
                                            <CardAutorDestaque
                                                autorDestaque={(section as HighlightsData).autorDestaque.data}
                                            />
                                        </div>
                                    ) : (
                                        <Heading as="h3" className="text-center mb-2">
                                            {t('Highlight author not found!')}
                                        </Heading>
                                    )}
                                </div>
                            </section>
                        );
                    case 'section.premios-slider': {
                        section = section as AwardsData;
                        const premios: { data: PremioData[] } | undefined = await getAllPremios(
                            'sort[0]=createdAt:desc&populate=*&',
                        );
                        if (premios !== undefined && premios.data.length > 0) {
                            let PremiosSliderPredominantColors: any = premios.data.map(async (premio: PremioData) => {
                                const url = `${API_ROOT}${premio.attributes.cover.data.attributes.formats !== null && premio.attributes.cover.data.attributes.formats.thumbnail.url !== undefined ? premio.attributes.cover.data.attributes.formats.thumbnail.url : premio.attributes.cover.data.attributes.url}`;
                                return await getPredominantColor(url);
                            });
                            PremiosSliderPredominantColors = await Promise.all(PremiosSliderPredominantColors).then(
                                (predominantColor) => predominantColor,
                            );
                            return (
                                <PremiosSlider
                                    key={section.id}
                                    predominantColors={PremiosSliderPredominantColors}
                                    premios={premios.data}
                                    sectionData={section}
                                />
                            );
                        }
                        return (
                            <section className="container mx-auto py-8">
                                <Heading as="h2">{t('No awards found!')}</Heading>
                            </section>
                        );
                    }
                    case 'section.certificados-carrossel': {
                        section = section as CertificatesData;
                        const certificados: { data: CertificadoData[] } | undefined = await getAllCertificados(
                            'sort[0]=createdAt:desc&populate=*&',
                        );
                        if (certificados !== undefined && certificados.data.length > 0) {
                            let CarrosselCertificadosPredominantColors: any = certificados.data.map(
                                async (certificado) => {
                                    const url = `${API_ROOT}${certificado.attributes.cover.data.attributes.formats !== null && certificado.attributes.cover.data.attributes.formats.small.url !== undefined ? certificado.attributes.cover.data.attributes.formats.small.url : certificado.attributes.cover.data.attributes.url}`;
                                    return await getPredominantColor(url);
                                },
                            );
                            CarrosselCertificadosPredominantColors = await Promise.all(
                                CarrosselCertificadosPredominantColors,
                            ).then((predominantColor) => predominantColor);
                            return (
                                <CarrosselCertificados
                                    certificados={certificados.data}
                                    sectionData={section}
                                    predominantColors={CarrosselCertificadosPredominantColors}
                                />
                            );
                        }
                        return (
                            <section className="container mx-auto py-8">
                                <Heading as="h2">{t('No certificates found!')}</Heading>
                            </section>
                        );
                    }
                    case 'section.projetos-carrossel': {
                        section = section as ProjectsData;
                        const projetos: { data: ProjetoData[] } | undefined = await getAllProjetos(projectsParameters);
                        if (projetos !== undefined && projetos.data.length > 0) {
                            let ProjetosCarrosselPredominantColors: any = projetos.data.map(async (projeto) => {
                                const url = `${API_ROOT}${projeto.attributes.cover.data.attributes.formats !== null && projeto.attributes.cover.data.attributes.formats.thumbnail.url !== undefined ? projeto.attributes.cover.data.attributes.formats.thumbnail.url : projeto.attributes.cover.data.attributes.url}`;
                                return await getPredominantColor(url);
                            });
                            ProjetosCarrosselPredominantColors = await Promise.all(
                                ProjetosCarrosselPredominantColors,
                            ).then((predominantColor) => predominantColor);
                            return (
                                <ProjetosCarrossel
                                    projetos={projetos.data}
                                    sectionData={section}
                                    predominantColors={ProjetosCarrosselPredominantColors}
                                />
                            );
                        }
                        return (
                            <section className="container mx-auto py-8">
                                <Heading as="h2">{t('No projects found!')}</Heading>
                            </section>
                        );
                    }
                    case 'section.ultimas-postagens': {
                        section = section as PostsData;
                        const posts: { data: PostData[] } | undefined = await getAllPosts(
                            'sort[0]=createdAt:desc&populate=*&',
                        );
                        if (posts !== undefined && posts.data.length > 0) {
                            let UltimasPostagensPredominantColors: any = posts.data.map(async (post) => {
                                const url = `${API_ROOT}${post.attributes.thumbnail.data.attributes.formats !== null && post.attributes.thumbnail.data.attributes.formats.thumbnail.url !== undefined ? post.attributes.thumbnail.data.attributes.formats.thumbnail.url : post.attributes.thumbnail.data.attributes.url}`;
                                return await getPredominantColor(url);
                            });
                            UltimasPostagensPredominantColors = await Promise.all(
                                UltimasPostagensPredominantColors,
                            ).then((predominantColor) => predominantColor);
                            return (
                                <UltimasPostagens
                                    posts={posts.data}
                                    sectionData={section}
                                    predominantColors={UltimasPostagensPredominantColors}
                                />
                            );
                        }
                        return (
                            <section className="container mx-auto py-8">
                                <Heading as="h2">{t('No posts found!')}</Heading>
                            </section>
                        );
                    }
                }
            })}
        </Container>
    );
}
