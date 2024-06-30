'use client';
import { theme } from '@/styles/theme';
import styled from 'styled-components';
import { HeadingProps } from '.';

export const Title = styled.h1<HeadingProps>`
    color: ${theme.colors.primary};
`;
