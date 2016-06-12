// This is the "root reducer"

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  // This is the name that will be used inside components (this.state.courses)
  courses
});

export default rootReducer;
