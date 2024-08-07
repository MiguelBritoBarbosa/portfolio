import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import { Container } from './styled';
import { CardAutorDestaque } from '@/components/CardAutorDestaque';
import { AutorData } from '@/config/domain/autores/autores';

interface AuthorsProps {
    autores: AutorData[];
}

export default async function Autores({ autores }: AuthorsProps) {
    const t = await getTranslations('Pages.Authors');
    return (
        <Container>
            <Heading className="text-center my-3" size={{ initial: '6', sm: '7', md: '8' }}>
                {t('Authors')}
            </Heading>
            <section className="container mx-auto py-8 grid md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-4 gap-4 rounded bg-gray-300 dark:bg-gray-900 justify-center items-stretch">
                {autores.map((autor) => {
                    return <CardAutorDestaque key={`author-${autor.attributes.slug}`} autorDestaque={autor} />;
                })}
            </section>
        </Container>
    );
}
