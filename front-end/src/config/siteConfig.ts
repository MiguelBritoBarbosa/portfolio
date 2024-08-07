export const SITE_NAME: string = process.env.NEXT_PUBLIC_SITE_NAME ?? '';
export const SITE_URL: string = process.env.NEXT_PUBLIC_SITE_URL ?? '';
export const API_URL: string = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL + '/api' : '';
export const API_ROOT: string = process.env.NEXT_PUBLIC_API_URL ?? '';
export const API_TOKEN: string = process.env.API_TOKEN ?? '';
export const HEADER_URL: string = `${API_URL}/header?populate[menuFixo][populate]=*&populate[banner]=*&populate[links][populate]=*&`;
export const FOOTER_URL: string = `${API_URL}/footer?populate[paragrafo]=*&populate[conteudo][populate]=*&populate[paginas][populate]=*&populate[contato]=*&populate[redesSociais]=*&`;
const highlightsSectionParameters =
    'populate[sections][populate][metadados][fields][0]=*&populate[sections][populate][autorDestaque][populate][foto][fields][0]=*&populate[sections][populate][projetos][populate][cover][fields][0]=*&populate[sections][populate][projetos][populate][autores][fields][0]=*&populate[sections][populate][projetos][populate][tecnologias][populate][icon][fields][0]=*&populate[sections][populate][projetos][populate][bancosDeDados][populate][icon][fields][0]=*';
export const LANDING_PAGE_URL: string = `${API_URL}/pages?filters[slug][$contains]=landing-page&${highlightsSectionParameters}&`;
export const CERTIFICADOS_URL: string = `${API_URL}/certificados?sort[0]=createdAt:desc&`;
export const PROJETOS_URL: string = `${API_URL}/projetos?sort[0]=createdAt:desc&`;
export const DESTAQUES_URL: string = `${API_URL}/projetos?sort[0]=createdAt:desc&filters[destaque][$eq]=true&`;
export const PREMIOS_URL: string = `${API_URL}/premios?sort[0]=createdAt:desc&`;
export const AUTOR_URL: string = `${API_URL}/autores?sort[0]=createdAt:desc&`;
export const POSTS_URL: string = `${API_URL}/posts?sort[0]=createdAt:desc&`;

export type Locale = (typeof locales)[number];
export const locales = ['pt', 'en'];
export const defaultLocale: Locale = 'pt';
