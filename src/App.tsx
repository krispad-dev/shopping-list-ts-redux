import { useAppSelector } from './app/hooks';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import InputForm from './components/InputForm';
import Logo from './components/logos/Logo';
import IngredientList from './components/lists/IngredientList';
import Button from './components/buttons/Button';


function App() {

	const { isDarkMode, themes } = useAppSelector(state => state.ui);


	return (
		<ThemeProvider theme={isDarkMode ? themes[0] : themes[1]}>
			<AppContainer className='App'>

				<header>
					<Logo />
				</header>

				<Main>
					<InputForm />
					<IngredientList />
				</Main>

				<footer>
				</footer>

			</AppContainer>
		</ThemeProvider>
	);
}

export default App;

const AppContainer = styled.div`
	height: 100vh;
	background-color: ${props => props.theme.bgColor};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Main = styled.main`
	height: 95%;
	width: 95%;
`;
