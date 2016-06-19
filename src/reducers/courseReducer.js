import * as types from '../actions/actionTypes';

// A reducer is just a function that accepts a state
// and an action and then returns a new state

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    
    default:
      return state;
  }
}
