import history from './lib/history'
import promise from 'es6-promise'
import React from 'react'
import { Provider } from 'react-redux'
import Router from 'react-router'
import Store, { reducer } from './redux/store/admin'
import routes from './routes'

console.log('Loading app...');

promise.polyfill();

const store = Store(reducer, window.__store);

React.render((
	<Provider store={store}>
		{() => <Router history={history} routes={routes(store)} />}
	</Provider>
), document.getElementById('app'));
