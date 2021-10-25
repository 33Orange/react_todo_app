import { ITodo } from '../../types';

export enum ActionType {
  SET_TODOS = 'SET_TODOS',
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  CHANGE_FILTER = 'CHANGE_FILTER',
}

interface setTodoAction {
  type: ActionType.SET_TODOS;
  payload: Array<ITodo>;
}

interface addTodoAction {
  type: ActionType.ADD_TODO;
  payload: ITodo;
}

interface deleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: ITodo;
}

interface updateTodoAction {
  type: ActionType.UPDATE_TODO;
  payload: ITodo;
}

interface changeFilter {
  type: ActionType.CHANGE_FILTER;
  payload: string;
}

export type Action =
  | setTodoAction
  | addTodoAction
  | deleteTodoAction
  | updateTodoAction
  | changeFilter;

export const setTodoAction = (payload: Array<ITodo>) => ({ type: ActionType.SET_TODOS, payload });
export const addTodoAction = (payload: ITodo) => ({ type: ActionType.ADD_TODO, payload });
export const deleteTodoAction = (payload: ITodo) => ({ type: ActionType.DELETE_TODO, payload });
export const updateTodoAction = (payload: ITodo) => ({ type: ActionType.UPDATE_TODO, payload });
export const changeFilter = (payload: string) => ({ type: ActionType.CHANGE_FILTER, payload });
