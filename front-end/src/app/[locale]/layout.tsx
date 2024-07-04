import '@/styles/globals.css';
import StyledComponentsRegistry from '../registry';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import NprogressComponent from '@/config/nprogress';
import '@/styles/nprogress.css';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800', '900'] });
import { getHeader } from '@/config/data/header/getHeader';
import { ThemeProvider } from '../providers/theme-provider';
import { Theme } from '@radix-ui/themes';

export async function generateMetadata() {
    const header: { data: headerData } | undefined = await getHeader();
    if (header !== undefined) {
        return {
            title: header.data.attributes.menuFixo.titulo,
            description: header.data.attributes.descricao,
        };
    }
    return {
        title: '',
        description: '',
    };
}

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { headerData } from '@/config/domain/header/header';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { API_ROOT } from '@/config/siteConfig';

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'pt' }];
}

interface Props {
    children: React.ReactNode;
    params: {
        locale: string;
    };
}
export default async function RootLayout({ children, params: { locale } }: Props) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    const header: { data: headerData } | undefined = await getHeader();
    const predominantColor = await getPredominantColor(
        `${API_ROOT}${header?.data.attributes.banner.data.attributes.url}`,
    );

    return (
        <html lang={locale}>
            <body className={montserrat.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <StyledComponentsRegistry>
                            <Theme accentColor="violet">
                                <NprogressComponent />
                                <Header
                                    headerData={header !== undefined ? header.data : null}
                                    bannerColor={predominantColor}
                                />
                                <main>{children}</main>
                                <Footer />
                            </Theme>
                        </StyledComponentsRegistry>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
