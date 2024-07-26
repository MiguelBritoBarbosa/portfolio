import '@/styles/globals.css';
import StyledComponentsRegistry from './registry';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import NprogressComponent from '@/config/nprogress';
import '@/styles/nprogress.css';
import { getHeader } from '@/config/data/header/getHeader';
import { ThemeProvider } from '../providers/theme-provider';
import { Theme } from '@radix-ui/themes';
import { headerData } from '@/config/domain/header/header';
import { NextIntlClientProvider } from 'next-intl';
import { getPredominantColor } from '@/utils/getPredominantColor';
import { API_ROOT } from '@/config/siteConfig';
import { footerData } from '@/config/domain/footer/footer';
import { getFooter } from '@/config/data/footer/getFooter';
import { getLocale, getMessages } from 'next-intl/server';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800', '900'],
    variable: '--font-montserrat',
});

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

interface Props {
    children: React.ReactNode;
}
export default async function RootLayout({ children }: Props) {
    const locale = await getLocale();
    const messages = await getMessages();
    const header: { data: headerData } | undefined = await getHeader();
    const predominantColor = await getPredominantColor(
        `${API_ROOT}${header?.data.attributes.banner.data.attributes.url}`,
    );
    const footer: { data: footerData } | undefined = await getFooter();
    return (
        <html lang={locale}>
            <body className={montserrat.className}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        <StyledComponentsRegistry>
                            <Theme accentColor="violet">
                                <NprogressComponent />
                                <Header
                                    headerData={header !== undefined ? header.data : null}
                                    bannerColor={predominantColor}
                                />
                                {children}
                                <Footer footerData={footer !== undefined ? footer.data : null} />
                            </Theme>
                        </StyledComponentsRegistry>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
