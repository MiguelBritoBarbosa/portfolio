'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
    background: #eee;
    .text-truncate {
        height: 170px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-line;
    }

    .ver-mais {
        color: ${theme.colors.primary};
    }
    .ver-mais:hover {
        color: ${theme.colors.secondary};
    }
`;
