import { Container } from './styled';

export interface HeadingProps {
    children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
    return (
        <Container id="heading" className="display-4 text-center">
            {children}
        </Container>
    );
};
