import * as types from '../actions/actionTypes';

// A reducer is just a function that accepts a state
// and an action and then returns a new state

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // We can't do this because state is immutable:
      // state.push(action.course);
      // return state;

      // Below is a spread operator which "explodes" the array
      // as though we had taken all the values in the array and defined
      // them inline.

      // This ends up returning a new instance of our state array.
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      // This reducer might not handle the action coming in.
      // In this case, we simply return state.
      return state;
  }
}
