import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { AutorData } from '../autores/autores';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export type PremioId = number;

export interface PremioData {
    id: PremioId;
    attributes: {
        titulo: string;
        descricao: RootNode[];
        credencial: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        autor: { data: AutorData };
        cover: StrapiFiles;
    };
}
