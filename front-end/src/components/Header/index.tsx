// import { theme } from '@/styles/theme';
import { ContainerHeader, HeaderTop } from './styled';
import Link from 'next/link';
// import Image from 'next/image';
export const Header = () => {
    return (
        <ContainerHeader className="container-fluid ">
            <div className="row">
                <HeaderTop>
                    <div className="d-flex justify-content-end">
                        <ul id="language" className="nav nav-tabs font-bold ">
                            <li className="nav-item">
                                <button className="nav-link buttons">En</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link buttons active">Pt-BR</button>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center px-2 fw-bold buttons">
                            <Link className="nav-link" href="/contato">
                                Contato
                            </Link>
                        </div>
                    </div>
                </HeaderTop>
                <div id="banner" className="text-center mt-5">
                    <Link id="menu" href="/"></Link>
                </div>
            </div>
        </ContainerHeader>
    );
};
