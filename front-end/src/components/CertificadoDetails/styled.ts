'use client';

import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
    background-color: ${theme.colors.primaryLight};
    .text-purple {
        color: ${theme.colors.secondary};
    }
    .purple-color {
        color: ${theme.colors.primary};
    }
    .purple-color:hover {
        color: ${theme.colors.secondary};
    }
`;
