import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { AutorData } from '../autores/autores';
import { StrapiImageFile } from '../strapiImageFiles/strapiFiles';

export type PremioId = number;

export interface PremioData {
    id: PremioId;
    attributes: {
        Titulo: string;
        Descricao: RootNode[];
        credencial: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        autor: AutorData;
        cover: StrapiImageFile;
    };
}
