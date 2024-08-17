import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { StrapiFiles } from '../StrapiFiles/strapifiles';
import { ProjetoData } from '../projetos/projetos';

export type tecnologiasID = number;

export interface TecnologiasData {
    id: tecnologiasID;
    attributes: {
        nome: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        tipo: tipoTecnologia;
        descricao: RootNode[];
        slug: string;
        icon: StrapiFiles;
        projetos: { data: ProjetoData[] };
    };
}

export enum tipoTecnologia {
    'Linguagem de Programação',
    'Linguagem de Marcação de Texto',
    'Linguagem de Estilização',
    'Framework',
    'Biblioteca',
    'Formato de Dados',
    'Ferramenta',
    'Outro',
}
