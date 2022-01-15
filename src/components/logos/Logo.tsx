import React from 'react';
import styled from 'styled-components';

export default function Logo() {
	return <LogoContainer>ShoppingList</LogoContainer>;
}

const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 5rem;
	width: 5rem;
	border-radius: 25px;
`;
