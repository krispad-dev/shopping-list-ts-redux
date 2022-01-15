import React from 'react'
import styled from 'styled-components'


export default function Button({ onClick, text }:any) {
    return <StyledButton onClick={(e) => onClick(e)}>{text}</StyledButton>
}


const StyledButton = styled.button`
    width: 100%;
    background-color: ${props => props.theme.accentColor};
    width: 6rem;
    height: 2rem;
    border-radius: 10px;
    color: white;
    border: none;

`