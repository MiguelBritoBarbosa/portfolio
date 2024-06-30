import Image from 'next/image';
import { Container } from './styled';
import Link from 'next/link';
import { AutorData } from '@/config/domain/autores/autores';
import { API_ROOT } from '@/config/siteConfig';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { getPredominantColor } from '@/utils/getPredominantColor';

interface CardMiguelProps {
    miguel: AutorData;
}

export const CardMiguel = async ({ miguel }: CardMiguelProps) => {
    if (miguel !== undefined) {
        const url = `${API_ROOT}${miguel.attributes.foto.data.attributes.url}`;
        const description: any = miguel.attributes.apresentacao
            ? miguel.attributes.apresentacao[0].children[0]
            : { text: '' };

        const predominantColor = await getPredominantColor(url);

        return (
            <div className="d-flex justify-content-center">
                <Container className="card">
                    <Image
                        placeholder="blur"
                        blurDataURL={rgbDataURL(predominantColor[0], predominantColor[1], predominantColor[2])}
                        className="card-img-top img-fluid"
                        src={url}
                        alt={miguel.attributes.nome}
                        width={500}
                        height={512}
                    />
                    <div className="card-body">
                        <h4 className="card-title">{miguel.attributes.nome}</h4>
                        <div className="card-text">
                            <span className="d-block tw-text-justify">
                                <p className="tw-leading-6">
                                    {description.text.split(' ').splice(0, 42).join(' ')}
                                    {description.text.split(' ').length > 42 ? <>...</> : <></>}
                                </p>
                            </span>
                        </div>
                        <Link href="/autores/miguel-brito-barbosa" className="btn btn-primary">
                            Veja meu perfil
                        </Link>
                    </div>
                </Container>
            </div>
        );
    }
    return <></>;
};
