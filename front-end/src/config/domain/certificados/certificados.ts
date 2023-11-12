import { Autor } from '../autores/autores';

export type CertificadoId = number;

export interface CertificadoData {
    id: CertificadoId;
    attributes: {
        Titulo: string;
        Descricao: string;
        credencial: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        autor: Autor;
        documento: Documento;
    };
}

export interface Documento {
    data: {
        id: CertificadoId;
        attributes: {
            name: string;
            formats: {
                large: Formats;
                small: Formats;
                medium: Formats;
                thumbnail: Formats;
            };
            url: string;
            size: number;
            ext: string;
            mime: string;
            createdAt: string;
            updatedAt: string;
        };
    };
}

export interface Formats {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}
