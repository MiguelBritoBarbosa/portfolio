import Link from 'next/link';
import { ContainerFooter, LineTopic } from './styled';

export const Footer = () => {
    return (
        <ContainerFooter className="text-center text-lg-start">
            <section className="container text-center text-md-start mt-5 p-4">
                <div className="row mt-3">
                    <div className="col-12 col-md-6 col-lg-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Portfólio</h6>
                        <LineTopic className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            Estudante entusiasta nas áreas de Engenharia de Software e Análises e desenvolvimento
                            Sistema. Resiliente e determinado a procura de novas experiências profissionais.
                        </p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <LineTopic className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <Link href="#!" className="">
                                Projetos
                            </Link>
                        </p>
                        <p>
                            <Link href="#!" className="">
                                Certificados
                            </Link>
                        </p>
                        <p>
                            <Link href="#!" className="">
                                Prêmios
                            </Link>
                        </p>
                        <p>
                            <Link href="#!" className="">
                                Destaques
                            </Link>
                        </p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                        <LineTopic className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <a href="#!" className="">
                                Contato
                            </a>
                        </p>
                        <p>
                            <a href="#!" className="">
                                Currículo
                            </a>
                        </p>
                        <p>
                            <a href="#!" className="">
                                Shipping Rates
                            </a>
                        </p>
                        <p>
                            <a href="#!" className="">
                                Help
                            </a>
                        </p>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <LineTopic className="mb-4 mt-0 d-inline-block mx-auto" />
                        <p>
                            <i className="bi bi-buildings"></i> São José dos Campos, SP - Brasil
                        </p>
                        <p>
                            <i className="bi bi-envelope mr-3"></i> miguelbrito2005@gmail.com
                        </p>
                        <p>
                            <i className="bi bi-phone mr-3"></i>+55 (12) 98193-7459
                        </p>
                    </div>
                </div>
            </section>

            <hr className="mb-4" />
            <section className=" text-center py-3" style={{ backgroundColor: '#6351ce' }}>
                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="https://www.linkedin.com/in/miguelbritobarbosa"
                    role="button"
                >
                    <i className="bi bi-linkedin"></i>
                </a>
                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="https://github.com/MiguelBritoBarbosa"
                    role="button"
                >
                    <i className="bi bi-github"></i>
                </a>
                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="https://www.instagram.com/itz_.preto/"
                    role="button"
                >
                    <i className="bi bi-instagram"></i>
                </a>
                <a
                    className="btn btn-outline-light btn-floating m-1"
                    href="https://twitter.com/mbb_black"
                    role="button"
                >
                    <i className="bi bi-twitter"></i>
                </a>
            </section>

            {/* <hr className="mt-2" /> */}

            <div className="text-center py-3" style={{ backgroundColor: '#bdbfc1' }}>
                <i className="bi bi-c-circle"></i> 2023 Copyright:{' '}
                <a className="" href="https://miguelbritobarbosa.com/">
                    Miguel Brito Barbosa
                </a>
            </div>
        </ContainerFooter>
    );
};
