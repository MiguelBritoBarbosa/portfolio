import { menuFixoData } from '../menu/menuFixo';
import { menuLinksData } from '../menu/menuLinks';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export type headerID = number;
export interface headerData {
    id: headerID;
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
