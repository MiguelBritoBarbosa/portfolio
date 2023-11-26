import { StrapiImages } from '../strapiImages/strapiImages';

export type StrapiImageFileID = number;

export interface StrapiImageFile {
    data: {
        id: StrapiImageFileID;
        attributes: StrapiImages;
    };
}
