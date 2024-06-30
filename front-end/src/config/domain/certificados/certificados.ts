import { AutorData } from '../autores/autores';
import { StrapiFiles } from '../StrapiFiles/strapifiles';

export type CertificadoId = number;

export interface CertificadoData {
    id: CertificadoId;
    attributes: {
        titulo: string;
        descricao: string;
        credencial: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        autor: { data: AutorData };
        documento: StrapiFiles;
    };
}
