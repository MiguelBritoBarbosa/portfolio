'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
    #banner {
        background-image: url('/images/meu banner.png');
        background-position: -20px -20px;
        /* background-attachment: fixed; */
        background-size: cover;
        height: 400px;
    }
`;

export const HeaderTop = styled.section`
    position: fixed;
    z-index: 1;
    background-color: ${theme.backgroundDark};
    .buttons {
        background-color: ${theme.backgroundDark};
        transition: 0.25s;
        &:hover {
            color: ${theme.colors.primary};
            background-color: ${theme.backgroundDarker};
            transition: 0.25s;
        }
    }
`;
