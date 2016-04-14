import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM'

export function fetchItems() {
	const request = axios.get('/api/v1/todos');

	return {
		type: FETCH_ITEMS,
		payload: request
	};
}

export function updateItem(item) {
	const request = axios.put(`/api/v1/todos/${item.id}`, item);

	return {
		type: UPDATE_ITEM,
		payload: request
	};
}

export function deleteItem(itemId) {
	const request = axios.delete(`/api/v1/todos/${itemId}`);

	return {
		type: DELETE_ITEM,
		payload: request
	};
}

export function addItem(todo) {
	console.log("Action jackson time")
	const request = axios.post(`/api/v1/todos`, todo);

	return {
		type: ADD_ITEM,
		payload: request
	};
}