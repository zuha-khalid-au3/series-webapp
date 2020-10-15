import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
const rootReducers = combineReducers({
  errors: errorReducer,
  movies: ''
});

export default rootReducers;
