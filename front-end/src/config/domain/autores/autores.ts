import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { StrapiImageFile } from '../strapiImageFiles/strapiFiles';
import { ProjetoData } from '../projetos/projetos';

export type autoId = number;

export interface AutorData {
    id: autoId;
    attributes: {
        Nome: string;
        Foto: StrapiImageFile;
        GitHub: string;
        Linkedin: string;
        site: string;
        Apresentacao: RootNode[];
        projetos: { data: ProjetoData[] };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        slug: string;
    };
}
