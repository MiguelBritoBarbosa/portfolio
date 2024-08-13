import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { StrapiFiles } from '../StrapiFiles/strapifiles';
import { ProjetoData } from '../projetos/projetos';

export type bancosDeDadosID = number;

export interface BancosDeDadosData {
    id: bancosDeDadosID;
    attributes: {
        nome: string;
        tipo: tipoBanco;
        descricao: RootNode[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        slug: string;
        icon: StrapiFiles;
        projetos: { data: ProjetoData[] };
    };
}

export enum tipoBanco {
    'Relacional',
    'Não Relacional',
}
