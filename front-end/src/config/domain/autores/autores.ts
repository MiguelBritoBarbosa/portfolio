import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { StrapiFiles } from '../StrapiFiles/strapifiles';
import { ProjetoData } from '../projetos/projetos';

export type autoId = number;

export interface AutorData {
    id: autoId;
    attributes: {
        nome: string;
        foto: StrapiFiles;
        github: string;
        linkedin: string;
        site: string;
        apresentacao: RootNode[];
        projetos: { data: ProjetoData[] };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        slug: string;
    };
}
