import { ITodo } from './todo';

export enum ActionType {
  CHANGE_FILTER = 'CHANGE_FILTER',

  ADD_TODO_SYNC = 'ADD_TODO_SYNC',
  DELETE_TODO_SYNC = 'DELETE_TODO_SYNC',
  UPDATE_TODO_SYNC = 'UPDATE_TODO_SYNC',
  UPDATE_TODO_ON_DRAG_SYNC = 'UPDATE_TODO_ON_DRAG_SYNC',
  DELETE_COMPLETED_TODOS_SYNC = 'DELETE_COMPLETED_TODOS_SYNC',
  TOGGLE_STATUS_ALL_TODOS_SYNC = 'TOGGLE_STATUS_ALL_TODOS_SYNC',
}

export interface IChangeFilter {
  type: ActionType.CHANGE_FILTER;
  payload: string;
}
export interface IAddTodoSync {
  type: ActionType.ADD_TODO_SYNC;
  payload: ITodo;
}
export interface IDeleteTodoSync {
  type: ActionType.DELETE_TODO_SYNC;
  payload: ITodo;
}
export interface IUpdateTodoSync {
  type: ActionType.UPDATE_TODO_SYNC;
  payload: ITodo;
}
export interface IUpdateTodoOnDragSync {
  type: ActionType.UPDATE_TODO_ON_DRAG_SYNC;
  payload: ITodo;
}
export interface IClearCompletedSync {
  type: ActionType.DELETE_COMPLETED_TODOS_SYNC;
  payload: Array<ITodo>;
}
export interface IToggleStatusAllTodosSync {
  type: ActionType.TOGGLE_STATUS_ALL_TODOS_SYNC;
  payload: Array<ITodo>;
}

export interface IUpdateOnDragPayload {
  newTodo: ITodo;
  prevTodo: ITodo;
}
export type Action = IChangeFilter;
