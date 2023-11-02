import { Header } from '@/components/Header';
import { Container } from './styled';
import Link from 'next/link';

export default function Landing() {
    return (
        <Container className="container-fluid text-center">
            <Link href="/home" >Home</Link>
        </Container>
    );
}
