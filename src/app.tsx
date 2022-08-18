/**
 * @format
 */

import React from 'react';
import Main from './screens/main';
import { Provider } from 'mobx-react';
import { todoStore } from './store/store';
import { Splash } from './components/splash/modal';

const App = () => {
	return (
		<Provider todoStore={todoStore}>
			<Splash />
			<Main />
		</Provider>
	);
};

export default App;
