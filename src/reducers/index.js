import { combineReducers } from "redux";

import account from "./reducer.account";
import auth from "./reducer.auth";
import peaks from "./reducer.peaks";

const Reducers = combineReducers({
    account,
    auth,
    peaks
});

export default Reducers;
