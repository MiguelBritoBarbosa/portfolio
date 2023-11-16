import Image from 'next/image';
import { Container } from './styled';
import Link from 'next/link';

export const CardMiguel = () => {
    return (
        <div className="d-flex justify-content-center">
            <Container className="card">
                <Image
                    className="card-img-top img-fluid"
                    src="/images/miguel.jpg"
                    alt="Card image"
                    width={500}
                    height={512}
                />
                <div className="card-body">
                    <h4 className="card-title">Miguel Brito Barbosa</h4>
                    <p className="card-text">
                        Desenvolvedor Full-Stack em formação, resiliente e entusiasta de tecnologia.
                        <br />
                        📚 3/3 Técnico em Informática <br />
                        💻 Loading... Engenharia de Software
                    </p>
                    <Link href="/autores/miguel-brito-barbosa" className="btn btn-primary">
                        Veja meu perfil
                    </Link>
                </div>
            </Container>
        </div>
    );
};
