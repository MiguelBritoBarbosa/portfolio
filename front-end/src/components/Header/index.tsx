'use client';
import { headerData } from '@/config/domain/header/header';
import { ContainerHeader } from './styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderTop } from './headerTop';

interface headerProps {
    headerData: headerData | null;
}

export const Header = ({ headerData }: headerProps) => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    return (
        <ContainerHeader className="container mx-auto max-w-full">
            <div className="flex flex-wrap justify-center">
                <HeaderTop headerData={headerData} />
                {!isHome ? (
                    <Link className="w-full" id="menu" href="/">
                        <div id="banner" className="text-center mt-5"></div>
                    </Link>
                ) : (
                    <div id="banner" className="w-full text-center mt-5"></div>
                )}
            </div>
        </ContainerHeader>
    );
};
