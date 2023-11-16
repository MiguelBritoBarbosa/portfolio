import { AutorData } from '../autores/autores';
import { StrapiFile } from '../strapiFiles/strapiFiles';

export type projetoID = number;

export interface ProjetoData {
    id: projetoID;
    attributes: {
        Titulo: string;
        Descricao: string;
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
        cover: StrapiFile;
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
