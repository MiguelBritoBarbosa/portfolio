export const SITE_NAME: string = process.env.NEXT_PUBLIC_SITE_NAME ?? '';
export const SITE_URL: string = process.env.NEXT_PUBLIC_SITE_URL ?? '';
export const API_URL: string = process.env.NEXT_PUBLIC_API_URL + '/api' ?? '';
export const API_ROOT: string = process.env.NEXT_PUBLIC_API_URL ?? '';
export const HEADER_URL: string = `${API_URL}/header?populate[menuFixo][populate]=*&populate[banner]=*&populate[links][populate]=*`;
export const CERTIFICADOS_URL: string = `${API_URL}/certificados?populate=*&`;
export const PROJETOS_URL: string = `${API_URL}/projetos?populate=*&`;
export const DESTAQUES_URL: string = `${API_URL}/projetos?populate=*&filters[destaque][$eq]=true&`;
export const PREMIOS_URL: string = `${API_URL}/premios?populate=*&`;
export const AUTOR_URL: string = `${API_URL}/autores?populate=*&`;
