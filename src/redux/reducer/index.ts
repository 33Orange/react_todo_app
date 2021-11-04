import { combineReducers } from 'redux';
import { todoReducer } from './todo';
import { filterReducer } from './filter';
import { userReducer } from './user';
import { isLoadingReducer } from './isLoading';
import { redirectReducer } from './redirect';

const reducers = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  user: userReducer,
  isLoading: isLoadingReducer,
  redirectStatus: redirectReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
