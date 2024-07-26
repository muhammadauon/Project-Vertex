import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootreducer';
import { applyMiddleware,createStore } from 'redux';

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
