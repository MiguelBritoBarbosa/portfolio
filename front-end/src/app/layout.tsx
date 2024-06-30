import '@/styles/globals.css';
import StyledComponentsRegistry from './registry';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import NprogressComponent from '@/config/nprogress';
import '@/styles/nprogress.css';
import { Montserrat } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800', '900'] });
import { getHeader } from '@/config/data/header/getHeader';
import { ThemeProvider } from './providers/theme-provider';
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const header: { data: headerData } | undefined = await getHeader();
    return (
        <html lang="pt-br">
            <body className={montserrat.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <StyledComponentsRegistry>
                        <Theme accentColor="violet">
                            <NprogressComponent />
                            <Header headerData={header !== undefined ? header.data : null} />
                            <Navbar />
                            <main>{children}</main>
                            <Footer />
                        </Theme>
                    </StyledComponentsRegistry>
                </ThemeProvider>
            </body>
        </html>
    );
}
