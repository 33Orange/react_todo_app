import { combineReducers } from 'redux';
import { todoReducers } from './todo';
import { filterReducer } from './filter';
import { userReducer } from './user';
import { authorizationErrorReducer } from './authorizationError';

const reducers = combineReducers({
  todos: todoReducers,
  filter: filterReducer,
  user: userReducer,
  authorizationError: authorizationErrorReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
