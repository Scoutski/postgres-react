import promise from 'es6-promise';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import Router from 'react-router';
// import routes from './routes';

import Main from './components/main';
import reducers from './redux/reducers';

console.log('Loading app...');

promise.polyfill();

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render((
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Main />
	</Provider>
), document.getElementById('app'));
