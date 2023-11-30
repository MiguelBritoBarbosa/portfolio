import Link from 'next/link';
import { Container } from './styled';
import { ProjetoData } from '@/config/domain/projetos/projetos';

export interface AutorDetailsProps {
    gitHub: string;
    linkedin: string;
    site: string;
    projetos: ProjetoData[];
}

export const AutorDetails = ({ gitHub, linkedin, site, projetos }: AutorDetailsProps) => {
    return (
        <Container className="rounded p-3 d-flex align-items-center">
            <div className="fs-5 text-white font-bold ">
                <p>
                    GitHub:{' '}
                    {gitHub !== null ? (
                        <span>
                            <a className="purple-color" href={gitHub} target="_blank">
                                {gitHub}
                            </a>
                        </span>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </p>
                <p>
                    Linkedin:{' '}
                    {linkedin !== null ? (
                        <span>
                            <Link className="purple-color" href={linkedin}>
                                {linkedin}
                            </Link>
                        </span>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </p>
                <p>
                    Site:{' '}
                    {site !== null ? (
                        <span>
                            <Link className="purple-color" href={site}>
                                {site}
                            </Link>
                        </span>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </p>
                <p className="fs-5 text-white font-bold">
                    Projetos:{' '}
                    {projetos !== null ? (
                        projetos.map((projeto) => {
                            return (
                                <span key={`${projeto.attributes.slug}`}>
                                    <span>
                                        <Link className="purple-color" href={`/projetos/${projeto.attributes.slug}`}>
                                            {projeto.attributes.Titulo}
                                        </Link>
                                    </span>
                                    {' | '}
                                </span>
                            );
                        })
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </p>
            </div>
        </Container>
    );
};
