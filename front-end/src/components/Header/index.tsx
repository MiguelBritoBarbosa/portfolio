import { theme } from '@/styles/theme';
import { ContainerHeader } from './styled';

export const Header = () => {
    return (
        <ContainerHeader className="p-3 text-center">
            <h1 style={{ color: theme.colors.primary }}>Header!</h1>
        </ContainerHeader>
    );
};
