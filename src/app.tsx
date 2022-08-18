/**
 * @format
 */

import React from 'react';
import Main from './screens/main';
import { Provider } from 'mobx-react';
import { todoStore } from './store/store';

const App = () => {
	return (
		<Provider todoStore={todoStore}>
			<Main />
		</Provider>
	);
};

export default App;
