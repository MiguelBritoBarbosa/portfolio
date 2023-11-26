import { formatDate } from '@/utils/formatDate';
import { Container } from './styled';

export interface ProjetoDateProps {
    date: string;
}

export const ProjetoDate = ({ date }: ProjetoDateProps) => {
    return <Container className="">{formatDate(date)}</Container>;
};
