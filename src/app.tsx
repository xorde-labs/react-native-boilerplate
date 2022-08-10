/**
 * @format
 */

import React from 'react';
import Main from './screens/main';
import { Provider } from 'mobx-react';
import { useColorScheme } from 'react-native';
import { AppColors, DarkColors, LightColors } from './theme';
import { todoStore } from './store/store';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const colorScheme: AppColors = isDarkMode ? DarkColors : LightColors;
	return (
		<Provider todoStore={todoStore}>
			<Main />
		</Provider>
	);
};

export default App;
