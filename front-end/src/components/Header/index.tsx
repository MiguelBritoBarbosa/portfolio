'use client';
import { headerData } from '@/config/domain/header/header';
import { ContainerHeader } from './styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderTop } from './headerTop';
import { Navbar } from '../Navbar';
import { API_ROOT } from '@/config/siteConfig';
import Image from 'next/image';
import { rgbDataURL } from '@/utils/rgbDataUrl';

interface headerProps {
    headerData: headerData | null;
    bannerColor: number[];
}

export const Header = ({ headerData, bannerColor }: headerProps) => {
    const pathname = usePathname();
    const isHome = pathname === '/';
    return (
        <ContainerHeader className="header max-w-full">
            <div className="flex flex-wrap justify-center">
                <HeaderTop headerData={headerData} />
                {!isHome ? (
                    <Link
                        className="w-full mt-12"
                        id="menu"
                        href="/"
                        title="Home"
                    >
                        <Image
                            className="w-full"
                            placeholder="blur"
                            blurDataURL={rgbDataURL(bannerColor[0], bannerColor[1], bannerColor[2])}
                            src={`${API_ROOT}${headerData?.attributes.banner.data.attributes.url}`}
                            alt={headerData !== null ? headerData.attributes.banner.data.attributes.caption : 'image'}
                            width={headerData?.attributes.banner.data.attributes.width}
                            height={headerData?.attributes.banner.data.attributes.height}
                        />
                    </Link>
                ) : (
                    <Image
                        className="w-full mt-12"
                        placeholder="blur"
                        blurDataURL={rgbDataURL(bannerColor[0], bannerColor[1], bannerColor[2])}
                        src={`${API_ROOT}${headerData?.attributes.banner.data.attributes.url}`}
                        alt={headerData !== null ? headerData.attributes.banner.data.attributes.caption : 'image'}
                        width={headerData?.attributes.banner.data.attributes.width}
                        height={headerData?.attributes.banner.data.attributes.height}
                    />
                )}
            </div>
            <Navbar links={headerData?.attributes.links} />
        </ContainerHeader>
    );
};
