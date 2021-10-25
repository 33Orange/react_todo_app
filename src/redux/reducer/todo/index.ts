import { ITodo } from '../../../types/todo';
import { ActionType, Action } from '../../../types/action';

const initialState: Array<ITodo> = [];

export const todoReducer = (state: Array<ITodo> = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TODOS:
      return [...action.payload];

    case ActionType.ADD_TODO:
      return [...state, action.payload];

    case ActionType.DELETE_TODO:
      return state.filter(item => item._id != action.payload._id);

    case ActionType.UPDATE_TODO:
      return state.map(item => {
        if (item._id == action.payload._id) {
          item = action.payload;
        }
        return item;
      });

    default:
      return state;
  }
};
