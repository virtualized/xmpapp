import { combineReducers } from 'redux';
import todos from './todosAsyncBackend';

const rootReducer = combineReducers({
  todos
});

export default rootReducer;