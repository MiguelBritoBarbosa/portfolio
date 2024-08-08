import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { AutorData } from '../autores/autores';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export type postsID = number;

export interface PostData {
    id: postsID;
    attributes: {
        titulo: string;
        descricao: string;
        conteudo: RootNode[];
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        thumbnail: StrapiFiles;
        autores: { data: AutorData[] };
    };
}
