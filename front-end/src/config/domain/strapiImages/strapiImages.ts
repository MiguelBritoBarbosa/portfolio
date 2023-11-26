export interface StrapiImages {
    name: string;
    alternativeText: null;
    caption: null;
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
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
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
