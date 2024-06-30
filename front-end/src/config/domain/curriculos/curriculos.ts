import { AutorData } from '../autores/autores';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export type curriculosID = number;

export interface CurriculosData {
    id: curriculosID;
    attributes: {
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        documento: StrapiFiles;

        slug: string;
        autores: { data: AutorData };
    };
}

export enum tipoBanco {
    'Relacional',
    'Não Relacional',
}
