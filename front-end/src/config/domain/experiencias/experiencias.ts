import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { AutorData } from '../autores/autores';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export type experienciasID = number;

export interface ExperienciasData {
    id: experienciasID;
    attributes: {
        empresa: string;
        inicio: string;
        termino: string;
        cargo: string;
        cover: StrapiFiles;
        descricao: RootNode[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        slug: string;
        autor: { data: AutorData };
    };
}

export enum tipoBanco {
    'Relacional',
    'Não Relacional',
}
