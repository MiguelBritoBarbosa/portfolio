export type StrapiFileID = number;

export interface StrapiFile {
    data: {
        id: StrapiFileID;
        attributes: {
            name: string;
            formats: {
                large: Formats;
                small: Formats;
                medium: Formats;
                thumbnail: Formats;
            };
            url: string;
            size: number;
            ext: string;
            mime: string;
            createdAt: string;
            updatedAt: string;
        };
    };
}

export interface Formats {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}
