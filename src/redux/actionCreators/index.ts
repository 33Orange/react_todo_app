import { ITodo } from '../../types/todo';
import {
  ActionType,
  IAddTodoAction,
  IDeleteTodoAction,
  ISetTodoAction,
  IUpdateTodoAction,
} from '../../types/action';

export const setTodoAction = (payload: Array<ITodo>): ISetTodoAction => ({
  type: ActionType.SET_TODOS,
  payload,
});

export const addTodoAction = (payload: ITodo): IAddTodoAction => ({
  type: ActionType.ADD_TODO,
  payload,
});

export const deleteTodoAction = (payload: ITodo): IDeleteTodoAction => ({
  type: ActionType.DELETE_TODO,
  payload,
});

export const updateTodoAction = (payload: ITodo): IUpdateTodoAction => ({
  type: ActionType.UPDATE_TODO,
  payload,
});

export const changeFilter = (payload: string) => ({ type: ActionType.CHANGE_FILTER, payload });
