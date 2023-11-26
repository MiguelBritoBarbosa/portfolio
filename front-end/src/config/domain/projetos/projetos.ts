import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { AutorData } from '../autores/autores';
import { StrapiImageFile } from '../strapiImageFiles/strapiFiles';

export type projetoID = number;

export interface ProjetoData {
    id: projetoID;
    attributes: {
        Titulo: string;
        Descricao: RootNode[];
        TipoProjeto: tipoProjeto;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        Destaque: boolean;
        slug: string;
        Link: string;
        Repositorio: string;
        Visibilidade: visibilidadeProjeto;
        cover: StrapiImageFile;
        autores: { data: AutorData[] };
    };
}

export enum tipoProjeto {
    'Profissional',
    'Pessoal',
    'Estudo',
}
export enum visibilidadeProjeto {
    'Privado',
    'Público',
}
