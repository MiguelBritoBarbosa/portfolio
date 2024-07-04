import { menuFixoData } from '../menu/menuFixo';
import { menuLinksData } from '../menu/menuLinks';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export interface headerData {
    id: number;
    attributes: {
        menuFixo: menuFixoData;
        descricao: string;
        banner: StrapiFiles;
        links: menuLinksData[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
    };
}
