import { Container } from './styled';

export interface HeadingProps {
    children: React.ReactNode;
}

export const ProjetoHeading = ({ children }: HeadingProps) => {
    return (
        <Container id="projeto-heading" className="display-4 text-center">
            {children}
        </Container>
    );
};
