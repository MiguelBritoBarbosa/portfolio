import { AutorData } from '../autores/autores';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export type curriculosID = number;

export interface CurriculosData {
    id: curriculosID;
    attributes: {
        nome: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        documento: StrapiFiles;

        slug: string;
        autor: { data: AutorData };
    };
}

export enum tipoBanco {
    'Relacional',
    'Não Relacional',
}
