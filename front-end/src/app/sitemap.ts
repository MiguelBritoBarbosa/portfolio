import { getAllAutores } from '@/config/data/autores/getAllAutores';
import { getAllBancosDeDados } from '@/config/data/bancoDeDados/getAllBancosDeDados';
import { getAllCertificados } from '@/config/data/certificados/getAllCertificados';
import { getAllExperiencias } from '@/config/data/experiencias/getAllExperiencias';
import { getAllPosts } from '@/config/data/posts/getAllPosts';
import { getAllPremios } from '@/config/data/premios/getAllPremios';
import { getAllProjetos } from '@/config/data/projetos/getAllProjetos';
import { getAllTecnologias } from '@/config/data/tecnologias/getAllTecnologias';
import { SITE_URL } from '@/config/siteConfig';

export default async function Sitemap() {
    const allAutores = await getAllAutores();
    let autores: { url: string; lastModified: string }[] = [];
    if (allAutores !== undefined && allAutores.data.length > 0) {
        autores = allAutores.data.map((autor) => {
            return {
                url: `${SITE_URL}/autores/${autor.attributes.slug}`,
                lastModified: autor.attributes.updatedAt,
            };
        });
    }
    const allBancosDeDados = await getAllBancosDeDados();
    let bancosDeDados: { url: string; lastModified: string }[] = [];
    if (allBancosDeDados !== undefined && allBancosDeDados.data.length > 0) {
        bancosDeDados = allBancosDeDados.data.map((bancoDeDados) => {
            return {
                url: `${SITE_URL}/banco-de-dados/${bancoDeDados.attributes.slug}`,
                lastModified: bancoDeDados.attributes.updatedAt,
            };
        });
    }
    const allPosts = await getAllPosts();
    let posts: { url: string; lastModified: string }[] = [];
    if (allPosts !== undefined && allPosts.data.length > 0) {
        posts = allPosts.data.map((post) => {
            return {
                url: `${SITE_URL}/blog/${post.attributes.slug}`,
                lastModified: post.attributes.updatedAt,
            };
        });
    }
    const allCertificados = await getAllCertificados();
    let certificados: { url: string; lastModified: string }[] = [];
    if (allCertificados !== undefined && allCertificados.data.length > 0) {
        certificados = allCertificados.data.map((certificado) => {
            return {
                url: `${SITE_URL}/certificados/${certificado.attributes.slug}`,
                lastModified: certificado.attributes.updatedAt,
            };
        });
    }
    const allExperiencias = await getAllExperiencias();
    let experiencias: { url: string; lastModified: string }[] = [];
    if (allExperiencias !== undefined && allExperiencias.data.length > 0) {
        experiencias = allExperiencias.data.map((experiencia) => {
            return {
                url: `${SITE_URL}/experiencias/${experiencia.attributes.slug}`,
                lastModified: experiencia.attributes.updatedAt,
            };
        });
    }
    const allPremios = await getAllPremios();
    let premios: { url: string; lastModified: string }[] = [];
    if (allPremios !== undefined && allPremios.data.length > 0) {
        premios = allPremios.data.map((premio) => {
            return {
                url: `${SITE_URL}/premios/${premio.attributes.slug}`,
                lastModified: premio.attributes.updatedAt,
            };
        });
    }
    const allProjetos = await getAllProjetos();
    let projetos: { url: string; lastModified: string }[] = [];
    if (allProjetos !== undefined && allProjetos.data.length > 0) {
        projetos = allProjetos.data.map((projeto) => {
            return {
                url: `${SITE_URL}/projetos/${projeto.attributes.slug}`,
                lastModified: projeto.attributes.updatedAt,
            };
        });
    }
    const allTecnologias = await getAllTecnologias();
    let tecnologias: { url: string; lastModified: string }[] = [];
    if (allTecnologias !== undefined && allTecnologias.data.length > 0) {
        tecnologias = allTecnologias.data.map((tecnologia) => {
            return {
                url: `${SITE_URL}/tecnologias/${tecnologia.attributes.slug}`,
                lastModified: tecnologia.attributes.updatedAt,
            };
        });
    }
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/autores`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/certificados`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/premios`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/projetos`,
            lastModified: new Date(),
        },
        ...autores,
        ...bancosDeDados,
        ...posts,
        ...certificados,
        ...experiencias,
        ...premios,
        ...projetos,
        ...tecnologias,
    ];
}
