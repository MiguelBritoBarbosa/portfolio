'use client';
import styled from 'styled-components';

export const Container = styled.section`
    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    .logos {
        overflow: hidden;
        padding: 20px 0;
        background: #eee;
        white-space: nowrap;
        position: relative;
    }

    .logos:before,
    .logos:after {
        position: absolute;
        top: 0;
        width: 220px;
        height: 100%;
        content: '';
        z-index: 2;
    }

    .logos:before {
        left: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
    }

    .logos:after {
        right: 0;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
    }

    /* .logos:hover .logos-slide {
        animation-play-state: paused;
    } */

    .logos-slide {
        display: inline-block;
        animation: 35s slide infinite linear;
    }

    .logos-slide img {
        height: 156px;
        width: 220px;
        margin: 0 40px;
    }
`;
