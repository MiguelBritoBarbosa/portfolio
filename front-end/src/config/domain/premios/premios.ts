import { AutorData } from '../autores/autores';
import { StrapiFile } from '../strapiFiles/strapiFiles';

export type PremioId = number;

export interface PremioData {
    id: PremioId;
    attributes: {
        Titulo: string;
        Descricao: string;
        credencial: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        autor: AutorData;
        cover: StrapiFile;
    };
}
