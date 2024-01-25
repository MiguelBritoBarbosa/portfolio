'use client';
// import Link from 'next/link';
import { Container } from './styled';
// import Image from 'next/image';
import { ProjetoData } from '@/config/domain/projetos/projetos';
// import { API_ROOT } from '@/config/siteConfig';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface ProjetosCarrosselProps {
    projetos: ProjetoData[];
}

export const ProjetosCarrossel = ({ projetos }: ProjetosCarrosselProps) => {
    console.log(projetos);
    return (
        <Container className="row p-3 d-flex justify-content-between rounded">
            <div>teste</div>
        </Container>
    );
};
