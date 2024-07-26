'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
    .ver-mais {
        color: ${theme.colors.primary};
    }
    .ver-mais:hover {
        color: ${theme.colors.secondary};
    }
`;
