import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { AutorData } from '../autores/autores';

export type experienciasID = number;

export interface ExperienciasData {
    id: experienciasID;
    attributes: {
        empresa: string;
        inicio: string;
        termino: string;
        cargo: string;
        descricao: RootNode[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        slug: string;
        autores: { data: AutorData };
    };
}

export enum tipoBanco {
    'Relacional',
    'Não Relacional',
}
