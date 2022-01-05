import { useAppDispatch, useAppSelector } from './app/hooks';
import { addIngredient } from './features/shoppingList-slice';
import styled from 'styled-components';

import InputForm from './components/inputForm';


function App() {
	/* 	const count = useAppSelector(state => state.shoppingList.ingredients[0]);
	const dispatch = useAppDispatch();

	function handleClick(): void {
		dispatch(
			addIngredient({
				name: 'Banana',
				purchased: false,
				notes: 'Nothing to report',
			})
		);
	} */
  
  function toggleDarkMode(): void {
    
  }

	return (
		<AppContainer className='App'>

			<Header></Header>

			<Main>
        <button onClick={toggleDarkMode}></button>
				<InputForm />
			</Main>

			<Footer></Footer>
		</AppContainer>
	);
}

export default App;


const AppContainer = styled.div`

  height: 100vh;
  background-color: ${props => props.theme.bgColor};



`

const Header = styled.header`

`


const Main = styled.main`

`


const Footer = styled.footer`


`