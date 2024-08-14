import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { StrapiFiles } from '../StrapiFiles/strapifiles';
import { ProjetoData } from '../projetos/projetos';
import { ExperienciasData } from '../experiencias/experiencias';
import { CurriculosData } from '../curriculos/curriculos';
import { PostData } from '../posts/posts';

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
        titulo: string;
        experiencias: { data: ExperienciasData[] };
        curriculos: { data: CurriculosData[] };
        projetos: { data: ProjetoData[] };
        posts: { data: PostData[] };
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        slug: string;
    };
}
