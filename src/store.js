import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import Reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(createLogger(), thunkMiddleware)(createStore)

const Store = createStoreWithMiddleware(Reducers);

export default Store;
