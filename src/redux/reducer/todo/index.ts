import { ITodo } from '../../../types/todo';
import { ActionType, Action } from '../../../types/action';
import { combineReducers } from 'redux';
import {
  fetchTodoActions,
  addTodoActions,
  deleteTodoActions,
  updateTodoActions,
  updateTodoOnDragActions,
  clearCompletedTodoActions,
  toggleCompletedTodoActions,
  ActionTodo,
} from '../../actionCreators';

const initialState: Array<ITodo> = [];

const todoReducer = (state: Array<ITodo> = initialState, action: ActionTodo) => {
  switch (action.type) {
    case fetchTodoActions.types.success:
      return [...action.payload];

    case addTodoActions.types.success:
      return [...state, action.payload];

    case deleteTodoActions.types.success:
      return state.filter(item => item._id != action.payload._id);

    case updateTodoActions.types.success:
      return state.map(item => {
        if (item._id == action.payload._id) {
          item = action.payload;
        }
        return item;
      });

    case clearCompletedTodoActions.types.success:
      return [...action.payload];

    case toggleCompletedTodoActions.types.success:
      return [...action.payload];

    default:
      return state;
  }
};

const initialStateLoader: boolean = false;

const isLoadingReducer = (state = initialState, action: ActionTodo) => {
  switch (action.type) {
    case fetchTodoActions.types.request:
      return true;

    case fetchTodoActions.types.success:
      return false;

    case fetchTodoActions.types.failed:
      return false;

    default:
      return state;
  }
};

export const todoReducers = combineReducers({
  list: todoReducer,
  isLoading: isLoadingReducer,
});
