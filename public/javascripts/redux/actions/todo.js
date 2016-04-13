import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export function fetchItems() {
	const request = axios.get('/api/v1/todos');

	return {
		type: FETCH_ITEMS,
		payload: request
	};
}

export function updateItem(item) {
	const completeChange = item.complete ? false : true;
	const updatedItem = {
		text: item.text,
		complete: completeChange
	};

	const request = axios.put(`/api/v1/todos/${item.id}`, updatedItem);

	return {
		type: UPDATE_ITEM,
		payload: request
	};
}