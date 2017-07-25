import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';

import RootReducer from './reducers/index';

const Store = createStore(RootReducer, {}, applyMiddleware(createLogger() ));

export default Store;
