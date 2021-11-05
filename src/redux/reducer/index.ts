import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { filterReducer } from './filter';
import { userReducer } from './user';
import { isLoadingReducer } from './isLoading';
import { authorizationErrorReducer } from './authorizationError';

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  authorizationError: authorizationErrorReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
