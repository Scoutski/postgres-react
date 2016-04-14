import Main from '../containers/main';
import AppHome from '../components/app_home';

export default function(store) {
	const routes = [
	];

	return {
		path: '/',
		component: Main,
		indexRoute: {
			component: AppHome,
			onEnter: getData(store)
		},
		childRoutes: mapOnEnter(routes, store)
	}
}
