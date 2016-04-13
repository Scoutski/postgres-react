import React from 'react';
import promise from 'redux-promise';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Main from './components/main';
import reducers from './redux/reducers';

console.log('Loading app...');

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render((
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Main />
	</Provider>
), document.getElementById('app'));
