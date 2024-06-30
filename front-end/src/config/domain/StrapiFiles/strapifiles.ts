export type StrapiFilesID = number;

export interface StrapiFiles {
    data: {
        id: StrapiFilesID;
        attributes: {
            name: string;
            alternativeText: string;
            caption: string;
            width: number;
            height: number;
            formats: {
                large: Formats;
                small: Formats;
                medium: Formats;
                thumbnail: Formats;
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string;
            provider: string;
            provider_metadata: string;
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
    path: string;
    size: number;
    width: number;
    height: number;
}
