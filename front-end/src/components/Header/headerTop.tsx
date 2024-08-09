'use client';
import { headerData } from '@/config/domain/header/header';
import { HeaderTopContainer } from './styled';
import Link from 'next/link';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Heading, Tabs, Text } from '@radix-ui/themes';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/services/locale';

interface headerTopProps {
    headerData: headerData | null;
}

export const HeaderTop = ({ headerData }: headerTopProps) => {
    const locale = useLocale();
    const pathname = usePathname();
    const isHome = pathname === '/';
    const router = useRouter();
    return (
        <HeaderTopContainer className="w-full h-12 flex justify-between items-center z-10 fixed top-0 px-4 bg-gray-200 dark:bg-gray-800">
            {!isHome ? (
                <Link href="/" className="leading-none" title="Home">
                    <Text
                        className="leading-none"
                        color="violet"
                        size={{ initial: '3', xs: '4', sm: '5', md: '6' }}
                        weight="bold"
                    >
                        {headerData !== null ? headerData.attributes.menuFixo.titulo : 'Sem Titulo'}
                    </Text>
                </Link>
            ) : (
                <Heading className="leading-none" color="violet" size={{ initial: '3', xs: '4', sm: '5', md: '6' }}>
                    {headerData !== null ? headerData.attributes.menuFixo.titulo : 'Sem Titulo'}
                </Heading>
            )}
            <div className="flex gap-x-2 items-center">
                <div className="flex px-2 gap-x-2">
                    {headerData !== null ? (
                        headerData.attributes.menuFixo.links.map((link) => {
                            return (
                                <Link
                                    className="p-2 h-full transition hover:bg-[--accent-a4]"
                                    key={link.id}
                                    href={link.url}
                                    title={link.rotulo}
                                >
                                    <Text
                                        color="violet"
                                        size={{ initial: '1', xs: '2', sm: '3', md: '4' }}
                                        weight="bold"
                                    >
                                        {link.rotulo}
                                    </Text>
                                </Link>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </div>
                <Tabs.Root defaultValue={locale}>
                    <Tabs.List size={{ initial: '1', sm: '2' }}>
                        <Tabs.Trigger
                            className="cursor-pointer btn-transition"
                            value="pt"
                            onClick={() => {
                                setUserLocale('pt').then(() => {
                                    const pathSegments = pathname.split('/').filter(Boolean);

                                    if (pathSegments.length > 1) {
                                        const slug = pathSegments[pathSegments.length - 1];
                                        if (slug.endsWith('-en')) {
                                            const newSlug = slug.replace('-en', '');
                                            const newPath = pathname.replace(slug, newSlug);
                                            router.push(newPath);
                                        }
                                    }
                                });
                            }}
                        >
                            PT
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            className="cursor-pointer btn-transition"
                            value="en"
                            onClick={() => {
                                setUserLocale('en').then(() => {
                                    const pathSegments = pathname.split('/').filter(Boolean);

                                    if (pathSegments.length > 1) {
                                        const slug = pathSegments[pathSegments.length - 1];
                                        if (!slug.endsWith('-en')) {
                                            const newSlug = `${slug}-en`;
                                            const newPath = pathname.replace(slug, newSlug);
                                            router.push(newPath);
                                        }
                                    }
                                });
                            }}
                        >
                            EN
                        </Tabs.Trigger>
                    </Tabs.List>
                </Tabs.Root>
                <ThemeSwitcher />
            </div>
        </HeaderTopContainer>
    );
};
