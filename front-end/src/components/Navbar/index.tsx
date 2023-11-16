import { ContainerNavbar } from './styled';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <ContainerNavbar className="navbar navbar-expand-md">
            <div className="container-fluid">
                <div id="navbar" className="collapse navbar-collapse d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/projetos">
                                    Projetos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/destaques">
                                    Destaques
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/certificados">
                                    Certificados
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/premios">
                                    Prêmios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/autores">
                                    Autores
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </ContainerNavbar>
    );
};
