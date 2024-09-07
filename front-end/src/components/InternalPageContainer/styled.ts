'use client';
import styled from 'styled-components';

export const Container = styled.section`
    p,
    blockquote,
    code {
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

    img {
        justify-self: center;
        margin-bottom: 12px;
    }

    pre {
        font-family: unset;
        white-space: pre-wrap;
    }

    code {
        background-color: var(--accent-a3);
        color: var(--accent-a11);
        --code-variant-font-size-adjust: calc(var(--code-font-size-adjust) * 0.95);
        font-family: var(--code-font-family);
        font-size: calc(var(--code-variant-font-size-adjust) * 1em);
        font-style: var(--code-font-style);
        font-weight: var(--code-font-weight);
        line-height: 1.25;
        letter-spacing: calc(var(--code-letter-spacing) + var(--letter-spacing, var(--default-letter-spacing)));
        border-radius: calc((0.5px + 0.2em) * var(--radius-factor));
        box-sizing: border-box;
        padding-top: var(--code-padding-top);
        padding-left: var(--code-padding-left);
        padding-bottom: var(--code-padding-bottom);
        padding-right: var(--code-padding-right);
        height: -moz-fit-content;
        height: fit-content;
    }

    .rt-Blockquote {
        border-left: max(var(--space-1), 0.25em) solid var(--accent-a9);
    }
`;
