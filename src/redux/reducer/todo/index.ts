import { ITodo } from '../../../types/todo';
import { ActionType, Action } from '../../../types/action';

const initialState: Array<ITodo> = [];

export const todoReducer = (state: Array<ITodo> = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TODOS_SUCCESS:
      return [...action.payload];

    case ActionType.ADD_TODO_SUCCESS:
      return [...state, action.payload];

    case ActionType.DELETE_TODO_SUCCESS:
      return state.filter(item => item._id != action.payload._id);

    case ActionType.UPDATE_TODO_SUCCESS:
      return state.map(item => {
        if (item._id == action.payload._id) {
          item = action.payload;
        }
        return item;
      });

    case ActionType.CLEAR_COMPLETED_TODO_SUCCESS:
      return [...action.payload];

    case ActionType.TOGGLE_STATUS_TODOS_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
};
