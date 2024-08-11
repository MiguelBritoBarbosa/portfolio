'use client';

import styled from 'styled-components';

export const Container = styled.section`
    .MuiTimeline-root {
        padding: 0;
        .MuiTimelineItem-missingOppositeContent {
            &::before {
                display: none;
            }
        }
        :nth-of-type(even) {
            .MuiTimelineContent-positionAlternate {
                display: flex;
                justify-content: end;
            }
        }
    }
`;
