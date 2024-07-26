import { SectionData } from './sections/sections';

export interface PageData {
    id: number;
    attributes: {
        title: string;
        slug: string;
        sections: SectionData[];
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
    };
}
