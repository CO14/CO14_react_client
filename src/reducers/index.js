import { combineReducers } from 'redux';

import account from './reducer_account';
import peaks from './reducer_peaks';

const Reducers = combineReducers({
  account,
  peaks
});

export default Reducers;
