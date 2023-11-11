'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
    background-color: ${theme.backgroundDark};
`;

export const LineTopic = styled.hr`
    width: 60px;
    background-color: ${theme.colors.primary};
    height: 2px;
`;
