'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
    #servicos {
        border-bottom: 2px solid ${theme.colors.primary};
        width: 10%;
    }

    .btn-primary {
        background-color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
    }

    .btn-primary:hover {
        background-color: ${theme.colors.secondary};
        border-color: ${theme.colors.secondary};
    }
    .ver-mais {
        color: ${theme.colors.primary};
    }
    .ver-mais:hover {
        color: ${theme.colors.secondary};
    }
`;
