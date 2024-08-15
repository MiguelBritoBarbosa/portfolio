import { ProjetoData } from '@/config/domain/projetos/projetos';
import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { Container } from './styled';
import { CardDestaque } from '@/components/CardDestaque';

interface ProjetosProps {
    projetos: ProjetoData[];
}

export default async function Projetos({ projetos }: ProjetosProps) {
    const t = await getTranslations('Pages.Projects');
    return (
        <Container>
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('Projects I participated in')}
            </Heading>
            <section className="container mx-auto py-8  px-2 sm:px-4 sm:rounded bg-gray-300 dark:bg-gray-900">
                <Heading as="h2" className="mb-3" size={{ initial: '6', sm: '7', md: '8' }}>
                    {t('Projects') + ': '}
                </Heading>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-stretch">
                    {projetos.map((projeto) => {
                        return (
                            <CardDestaque key={`projects-page-projeto-${projeto.attributes.slug}`} destaque={projeto} />
                        );
                    })}
                </div>
            </section>
        </Container>
    );
}
