import styled, { StyledComponent } from 'styled-components';
import { useState } from 'react';
import Button from './buttons/Button';
import { useAddIngredientMutation } from '../services/ingredient'

export default function InputForm() {

 	const [ addIngredient, res ] = useAddIngredientMutation()
	const [ formInput, setFormInput ] = useState('')

	function clickHandler(e:Event): void {
		e.preventDefault()
		addIngredient({ purchased: false, ingredient: formInput })
	}

	return (
		<Form>
			<Button onClick={clickHandler} text={'SAVE'} />
			<input 

			id='add-ingredient-input' 
			type='text' 
			onChange={e => setFormInput(e.target.value)} 
			
			/>
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
