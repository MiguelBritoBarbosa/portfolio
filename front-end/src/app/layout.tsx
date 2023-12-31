import '@/styles/globals.css';
import StyledComponentsRegistry from './registry';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Bootstrap from '@/config/bootstrap';
import NprogressComponent from '@/config/nprogress';
import '@/styles/nprogress.css';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800', '900'] });

export const metadata: Metadata = {
    title: 'Miguel Brito Barbosa',
    description:
        'Meu site pessoal com meu portfólio demonstrando todos os projetos que já participei, sendo profissionais, pessoais ou até mesmo de estudo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body className={montserrat.className}>
                <Bootstrap />
                <NprogressComponent />
                <Header />
                <Navbar />
                <StyledComponentsRegistry>
                    <main>{children}</main>
                </StyledComponentsRegistry>
                <Footer />
            </body>
        </html>
    );
}
