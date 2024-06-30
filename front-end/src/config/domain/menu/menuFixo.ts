import { menuLinksData } from './menuLinks';

export type menuFixoID = number;
export interface menuFixoData {
    id: menuFixoID;
    titulo: string;
    links: menuLinksData[];
}
