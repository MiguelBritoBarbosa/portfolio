import { AutorData } from '../../autores/autores';
import { ProjetoData } from '../../projetos/projetos';
import { SectionDefaultData } from './sectionDefault';

export interface HighlightsData extends SectionDefaultData {
    autorTitulo: string;
    destaquesTitulo: string;
    autorDestaque: { data: AutorData };
    projetos: { data: ProjetoData[] };
}
