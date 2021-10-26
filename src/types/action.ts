import { ITodo } from './todo';

export enum ActionType {
  SET_TODOS = 'SET_TODOS',
  ASYNC_SET_TODOS = 'ASYNC_SET_TODOS',
  ADD_TODO = 'ADD_TODO',
  ASYNC_ADD_TODO = 'ASYNC_ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  ASYNC_DELETE_TODO = 'ASYNC_DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  ASYNC_UPDATE_TODO = 'ASYNC_UPDATE_TODO',
  ASYNC_CLEAR_COMPLETED = 'ASYNC_CLEAR_COMPLETED',
  ASYNC_TOGGLE_STATUS = 'ASYNC_TOGGLE_STATUS',
  CHANGE_FILTER = 'CHANGE_FILTER',
}

export interface SetTodoAction {
  type: ActionType.SET_TODOS;
  payload: Array<ITodo>;
}

export interface AddTodoAction {
  type: ActionType.ADD_TODO;
  payload: ITodo;
}

export interface DeleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: ITodo;
}

export interface UpdateTodoAction {
  type: ActionType.UPDATE_TODO;
  payload: ITodo;
}

export interface ChangeFilter {
  type: ActionType.CHANGE_FILTER;
  payload: string;
}

export type Action =
  | SetTodoAction
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | ChangeFilter;
