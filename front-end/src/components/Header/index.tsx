'use client';
import { headerData } from '@/config/domain/header/header';
import { ContainerHeader } from './styled';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderTop } from './headerTop';
import { useLocale } from 'next-intl';
import { Navbar } from '../Navbar';
import { API_ROOT } from '@/config/siteConfig';
import Image from 'next/image';
import { rgbDataURL } from '@/utils/rgbDataUrl';

interface headerProps {
    headerData: headerData | null;
    bannerColor: number[];
}

export const Header = ({ headerData, bannerColor }: headerProps) => {
    const locale = useLocale();
    const pathname = usePathname();
    const isHome = pathname === `/${locale}`;
    console.log(`${API_ROOT}${headerData?.attributes.banner.data.attributes.url}`);
    return (
        <ContainerHeader className="container mx-auto max-w-full">
            <div className="flex flex-wrap justify-center">
                <HeaderTop headerData={headerData} />
                {!isHome ? (
                    <Link className="w-full mt-10" id="menu" href="/">
                        <Image
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
                        className="w-full mt-10"
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
