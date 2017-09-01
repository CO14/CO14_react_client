import {SET_CURRENT_USER} from '../actions/action_types';

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {}
    default:
      return state;
  }
};
