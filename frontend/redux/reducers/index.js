import { combineReducers } from 'redux';
import TodoReducer from './todo_reducer'

const rootReducer = combineReducers({
	todos: TodoReducer
});

export default rootReducer;
