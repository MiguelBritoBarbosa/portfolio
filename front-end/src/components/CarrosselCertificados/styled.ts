'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.section`
    background-color: ${theme.backgroundDark};
    .swiper-wrapper {
        transition-timing-function: linear;
    }
`;
