import { theme } from '@/styles/theme';
import { ContainerHeader } from './styled';

export const Footer = () => {
    return (
        <ContainerHeader className="p-3 text-center tw-mt-96">
            <h1 style={{ color: theme.colors.primary }}>Footer!</h1>
        </ContainerHeader>
    );
};
