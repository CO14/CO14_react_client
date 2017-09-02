import { ACCOUNT_PROFILE_REQUEST } from '../actions/action_types';


export default (state = [], action) => {
  switch (action.type) {
    case ACCOUNT_PROFILE_REQUEST:
      return action.payload
    default:
      return state;
  }
};
