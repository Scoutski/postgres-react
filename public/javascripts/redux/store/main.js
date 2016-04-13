import { createStore, applyMiddleware, combineReducers } from 'redux';

export default applyMiddleware()(createStore);

export const reducer = combineReducers({

});