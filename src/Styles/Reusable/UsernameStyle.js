import React from 'react';
import styled from 'styled-components';
import { comment } from 'postcss';

export const theme = {
    boldness: {
        title: 'bolder',
        comment: 'bold',
    }
}

const UsernameStyled = styled.h2`
    font-size: 0.9rem;
    font-weight: ${props => props.boldness};
`;

export default function UsernameStyle({ username, boldness }) {
    return (
        <UsernameStyled boldness={boldness}>{username}&nbsp;</UsernameStyled>
    )
}