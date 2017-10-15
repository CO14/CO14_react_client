import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk'

import Reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(createLogger(), reduxThunk)(createStore)

const Store = createStoreWithMiddleware(Reducers);

export default Store;
