import Link from 'next/link';
import { Container } from './styled';

export interface AutorDetailsProps {
    gitHub: string;
    linkedin: string;
    site: string;
}

export const AutorDetails = ({ gitHub, linkedin, site }: AutorDetailsProps) => {
    return (
        <Container className="rounded p-3 d-flex align-items-center">
            <div className="fs-5 text-white font-bold ">
                <div className="mb-4 text-brek">
                    <span>GitHub: </span>
                    {gitHub !== null ? (
                        <a className="purple-color" href={gitHub} target="_new">
                            {gitHub}
                        </a>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </div>
                <div className="mb-4 text-brek">
                    <span>Linkedin: </span>
                    {linkedin !== null ? (
                        <Link className="purple-color" href={linkedin}>
                            {linkedin}
                        </Link>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </div>
                <div className=" text-brek">
                    <span>Site: </span>
                    {site !== null ? (
                        <Link className="purple-color" href={site}>
                            {site}
                        </Link>
                    ) : (
                        <>
                            <span className="text-purple">...</span>
                        </>
                    )}
                </div>
            </div>
        </Container>
    );
};
