import styled, { StyledComponent } from 'styled-components';

export default function InputForm() {
	return (
		<Form>
			<input id='add-ingredient-input' type='text' />
			<input id='add-ingredient-checkbox' type='checkbox' />
		</Form>
	);
}

const Form = styled.form`
	display: flex;
	justify-content: space-around;
	align-items: center;

	input#add-ingredient-input {
		height: 2rem;
		border-radius: 10px;
		border: none;
	}

	input#add-ingredient-checkbox {
		height: 3rem;
	}
`;
