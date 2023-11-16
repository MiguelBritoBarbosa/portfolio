export type autoId = number;

export interface AutorData {
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
}
