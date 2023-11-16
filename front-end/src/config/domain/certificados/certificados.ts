import { AutorData } from '../autores/autores';
import { StrapiFile } from '../strapiFiles/strapiFiles';

export type CertificadoId = number;

export interface CertificadoData {
    id: CertificadoId;
    attributes: {
        Titulo: string;
        Descricao: string;
        credencial: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        autor: AutorData;
        documento: StrapiFile;
    };
}
