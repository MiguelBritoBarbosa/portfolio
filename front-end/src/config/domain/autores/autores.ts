export type autoId = number;

export interface Autor {
    data: {
        id: autoId;
        attributes: {
            Nome: string;
            GitHub: string;
            Linkedin: string;
            site: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            slug: string;
        };
    };
}
