import * as Styled from './styled';

export interface HeadingProps {
    children: React.ReactNode;
    textClass?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = ({ children, as = 'h2', textClass = 'text-4xl' }: HeadingProps) => {
    return (
        <Styled.Title as={as} className={`${textClass} text-center m-0`}>
            {children}
        </Styled.Title>
    );
};
