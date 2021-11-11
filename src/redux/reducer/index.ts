import { combineReducers } from 'redux';
import { todoReducers } from './todo';
import { filterReducer } from './filter';
import { userReducers } from './user';

const reducers = combineReducers({
  todos: todoReducers,
  filter: filterReducer,
  user: userReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
