import { ITodo } from './todo';

export enum AsyncActionType {
  ASYNC_SET_TODOS = 'ASYNC_SET_TODOS',
  ASYNC_ADD_TODO = 'ASYNC_ADD_TODO',
  ASYNC_DELETE_TODO = 'ASYNC_DELETE_TODO',
  ASYNC_UPDATE_TODO = 'ASYNC_UPDATE_TODO',
  ASYNC_CLEAR_COMPLETED = 'ASYNC_CLEAR_COMPLETED',
  ASYNC_TOGGLE_STATUS = 'ASYNC_TOGGLE_STATUS',
}

export interface IAsyncSetTodoAction {
  type: AsyncActionType.ASYNC_SET_TODOS;
}
export interface IAsyncAddTodoAction {
  type: AsyncActionType.ASYNC_ADD_TODO;
  payload: string;
}
export interface IAsyncDeleteTodoAction {
  type: AsyncActionType.ASYNC_DELETE_TODO;
  payload: string;
}
export interface IAsyncUpdateTodoAction {
  type: AsyncActionType.ASYNC_UPDATE_TODO;
  payload: ITodo;
}
export interface IAsyncClearCompletedAction {
  type: AsyncActionType.ASYNC_CLEAR_COMPLETED;
}
export interface IAsyncToggleStatusAllTodosAction {
  type: AsyncActionType.ASYNC_TOGGLE_STATUS;
  payload: boolean;
}
