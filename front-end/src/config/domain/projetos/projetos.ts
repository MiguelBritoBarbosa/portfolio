import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { AutorData } from '../autores/autores';
import { StrapiFiles } from '../StrapiFiles/strapifiles';
import { TecnologiasData } from '../tecnologias/tecnologias';
import { bancosDeDadosData } from '../bancos de dados/bancosDeDados';

export type projetoID = number;

export interface ProjetoData {
    id: projetoID;
    attributes: {
        titulo: string;
        descricao: RootNode[];
        tipoProjeto: tipoProjeto;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        destaque: boolean;
        slug: string;
        link: string;
        repositorio: string;
        visibilidade: visibilidadeProjeto;
        cover: StrapiFiles;
        autores: { data: AutorData[] };
        tecnologias: { data: TecnologiasData[] };
        bancosDeDados: { data: bancosDeDadosData[] };
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
