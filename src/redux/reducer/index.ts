import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { filterReducer } from './filter';

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
