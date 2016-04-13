import { FETCH_ITEMS } from '../actions/todo';

const INITIAL_STATE = {
	items: [],
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_ITEMS:
		return { items: action.payload.data };
	default:
		return state;
	}
}
