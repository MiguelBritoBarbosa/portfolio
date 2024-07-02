'use client';
import { headerData } from '@/config/domain/header/header';
import { HeaderTopContainer } from './styled';
import Link from 'next/link';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Heading, Tabs, Text } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

interface headerTopProps {
    headerData: headerData | null;
}

export const HeaderTop = ({ headerData }: headerTopProps) => {
    const locale = useLocale();
    const pathname = usePathname();
    const isHome = pathname === `/${locale}`;
    return (
        <HeaderTopContainer className="w-full flex justify-between items-center z-10 position-fixed px-4 bg-gray-200 dark:bg-gray-800">
            <Heading color="violet">
                {!isHome ? (
                    <Link href="/">{headerData !== null ? headerData.attributes.menuFixo.titulo : 'Sem Titulo'}</Link>
                ) : (
                    <>{headerData !== null ? headerData.attributes.menuFixo.titulo : 'Sem Titulo'}</>
                )}
            </Heading>
            <div className="flex gap-x-2">
                <div className="flex items-center px-2 gap-x-2">
                    {headerData !== null ? (
                        headerData.attributes.menuFixo.links.map((link) => {
                            return (
                                <Link
                                    className="p-2 h-full transition hover:bg-[--accent-a4]"
                                    key={link.id}
                                    href={link.url}
                                >
                                    <Text color="violet" weight="bold">
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
                    <Tabs.List>
                        <Link href={pathname.replace(locale, 'pt')} locale="pt">
                            <Tabs.Trigger className="cursor-pointer" value="pt">
                                PT
                            </Tabs.Trigger>
                        </Link>
                        <Link href={pathname.replace(locale, 'en')} locale="en">
                            <Tabs.Trigger className="cursor-pointer" value="en">
                                EN
                            </Tabs.Trigger>
                        </Link>
                    </Tabs.List>
                </Tabs.Root>
                <ThemeSwitcher />
            </div>
        </HeaderTopContainer>
    );
};
