'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContainerNavbar = styled.nav`
    background-color: ${theme.colors.primary};
    .nav-link {
        color: ${theme.colors.primaryLight};
    }

    .nav-link:hover {
        color: ${theme.colors.secondary};
    }
`;
