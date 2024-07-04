import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';
import { menuLinksData } from '../menu/menuLinks';

export interface footerData {
    id: number;
    attributes: {
        paragrafo: {
            id: number;
            titulo: string;
            descricao: RootNode[];
        };
        conteudo: tabWithLinks;
        paginas: tabWithLinks;
        contato: {
            id: number;
            endereco: string;
            emailDeContato: string;
            telefone: string;
        };
        redesSociais: socialMedia[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
    };
}

interface tabWithLinks {
    id: number;
    titulo: string;
    links: menuLinksData[];
}

interface socialMedia {
    id: number;
    rede: string;
    link: string;
}
