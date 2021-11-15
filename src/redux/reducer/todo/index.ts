import { ITodo } from '../../../types/todo';
import { ActionType } from '../../../types/action';
import { combineReducers } from 'redux';
import {
  fetchTodoActions,
  addTodoActions,
  deleteTodoActions,
  updateTodoActions,
  deleteCompletedTodosActions,
  toggleTodosActions,
  ActionTodo,
} from '../../actionCreators';

const initialState: Array<ITodo> = [];

const todoReducer = (state: Array<ITodo> = initialState, action: ActionTodo) => {
  switch (action.type) {
    case fetchTodoActions.types.success:
      return [...action.payload];

    case ActionType.ADD_TODO_SYNC:
    case addTodoActions.types.success:
      return [...state, action.payload];

    case ActionType.DELETE_TODO_SYNC:
    case deleteTodoActions.types.success:
      return state.filter(item => item._id != action.payload._id);

    case ActionType.UPDATE_TODO_SYNC:
    case updateTodoActions.types.success:
      return state.map(item => {
        if (item._id == action.payload._id) {
          item = action.payload;
        }
        return item;
      });

    case ActionType.DELETE_COMPLETED_TODOS_SYNC:
    case deleteCompletedTodosActions.types.success:
      return [...action.payload];

    case ActionType.TOGGLE_STATUS_ALL_TODOS_SYNC:
    case toggleTodosActions.types.success:
      return [...action.payload];

    default:
      return state;
  }
};

const initialStateLoader: boolean = true;

const isLoadingReducer = (state = initialStateLoader, action: ActionTodo) => {
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
