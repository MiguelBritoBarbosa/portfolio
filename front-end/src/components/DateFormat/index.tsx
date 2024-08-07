import { FormatDate } from '@/utils/formatDate';
import { Container } from './styled';

export interface ProjetoDateProps {
    date: string;
}

export const DateFormat = ({ date }: ProjetoDateProps) => {
    return <Container className="">{FormatDate(date)}</Container>;
};
