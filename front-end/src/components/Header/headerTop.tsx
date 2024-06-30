'use client';
import { headerData } from '@/config/domain/header/header';
import { HeaderTopContainer } from './styled';
import Link from 'next/link';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { Heading, Text } from '@radix-ui/themes';
import { usePathname } from 'next/navigation';

interface headerTopProps {
    headerData: headerData | null;
}

export const HeaderTop = ({ headerData }: headerTopProps) => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    return (
        <HeaderTopContainer className="w-full flex justify-between items-center z-10 position-fixed px-4 bg-gray-200 dark:bg-gray-800">
            <Heading color="violet">
                {!isHome ? (
                    <Link href="/">{headerData !== null ? headerData.attributes.menuFixo.titulo : 'Sem Titulo'}</Link>
                ) : (
                    <>{headerData !== null ? headerData.attributes.menuFixo.titulo : 'Sem Titulo'}</>
                )}
            </Heading>
            {/* <ul id="language" className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 font-bold ">
                <li className="">
                    <button className="inline-block py-2 px-4 no-underline buttons">En</button>
                </li>
                <li className="">
                    <button className="inline-block py-2 px-4 no-underline buttons active">Pt-BR</button>
                </li>
            </ul> */}
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
                <ThemeSwitcher />
            </div>
        </HeaderTopContainer>
    );
};
