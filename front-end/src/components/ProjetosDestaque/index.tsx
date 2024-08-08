import { CardDestaque } from '../CardDestaque';
import { Container } from './styled';
import { ProjetoData } from '@/config/domain/projetos/projetos';

interface ProjetosDestaqueProps {
    destaques: ProjetoData[];
}

export const ProjetosDestaque = ({ destaques }: ProjetosDestaqueProps) => {
    return (
        <Container className="grid md:grid-cols-2 p-2 sm:p-4 gap-4 rounded bg-gray-200 dark:bg-gray-800">
            {destaques.map((destaque) => {
                return (
                    <CardDestaque key={`highlight-section-projeto-${destaque.attributes.slug}`} destaque={destaque} />
                );
            })}
        </Container>
    );
};
