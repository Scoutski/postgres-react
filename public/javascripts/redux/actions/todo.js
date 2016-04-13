import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems() {
	const request = axios.get('/api/v1/todos');

	return {
		type: FETCH_ITEMS,
		payload: request
	};
}
