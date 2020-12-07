import { applyMiddleware, createStore } from 'redux';
import { updateIsInCart } from './middleware';
import appReducer from './reducer';

const middlewareEnhancer = applyMiddleware(updateIsInCart);
const store = createStore(appReducer, middlewareEnhancer);

export default store;