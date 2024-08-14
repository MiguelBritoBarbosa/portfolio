'use client';
import styled from 'styled-components';

export const Container = styled.div`
    p {
        margin-bottom: 12px;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: revert;
        font-weight: revert;
        margin: 0 0 20px;
    }

    ol,
    ul,
    menu {
        list-style: revert;
        margin-bottom: 12px;
        padding: revert;
    }
`;
