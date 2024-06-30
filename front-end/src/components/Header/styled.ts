'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContainerHeader = styled.header`
    #banner {
        background-image: url('/images/meu banner.png');
        background-position: center 35px;
        background-attachment: fixed;
        background-repeat: no-repeat;
        /* background-size: cover; */
        height: 470px;
    }
`;

export const HeaderTopContainer = styled.section`
    position: fixed;
    z-index: 1;
`;
