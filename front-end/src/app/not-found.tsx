import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import '@/styles/globals.css';

export default async function NotFound() {
    const t = await getTranslations('Pages');
    return (
        <div className="container mx-auto grid gap-y-2 justify-center items-center m-24">
            <Heading as="h2" className="text-4xl text-center">
                {t('Page not found!')}
            </Heading>
            <Link href="/" className="hover:text-[--accent-a9] transition text-center">
                {t('Return to Home')}
            </Link>
        </div>
    );
}
