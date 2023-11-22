export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? undefined;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? undefined;
export const API_URL = process.env.NEXT_PUBLIC_API_URL + '/api' ?? undefined;
export const API_ROOT = process.env.NEXT_PUBLIC_API_URL ?? undefined;
export const CERTIFICADOS_URL = `${API_URL}/certificados?populate=*&`;
export const DESTAQUES_URL = `${API_URL}/projetos?populate=*&filters[Destaque][$eq]=true&`;
export const PREMIOS_URL = `${API_URL}/premios?populate=*&`;
