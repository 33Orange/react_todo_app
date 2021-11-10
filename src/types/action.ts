import { ITodo } from './todo';

export enum ActionType {
  SET_TODOS_REQUEST = 'SET_TODOS_REQUEST',
  SET_TODOS_SUCCESS = 'SET_TODOS_SUCCESS',
  SET_TODOS_FAILED = 'SET_TODOS_FAILED',

  ADD_TODO_REQUEST = 'ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
  ADD_TODO_FAILED = 'ADD_TODO_FAILED',

  DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST',
  DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
  DELETE_TODO_FAILED = 'DELETE_TODO_FAILED',

  UPDATE_TODO_AFTER_DRAG_REQUEST = 'UPDATE_TODO_AFTER_DRAG',
  UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST',
  UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS',
  UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED',

  CLEAR_COMPLETED_TODO_REQUEST = 'CLEAR_TODO_REQUEST',
  CLEAR_COMPLETED_TODO_SUCCESS = 'CLEAR_TODO_SUCCESS',
  CLEAR_COMPLETED_TODO_FAILED = 'CLEAR_TODO_FAILED',

  TOGGLE_STATUS_TODOS_REQUEST = 'TOGGLE_STATUS_TODOS_REQUEST',
  TOGGLE_STATUS_TODOS_SUCCESS = 'TOGGLE_STATUS_TODOS_SUCCESS',
  TOGGLE_STATUS_TODOS_FAILED = 'TOGGLE_STATUS_TODOS_FAILED',

  CHANGE_FILTER = 'CHANGE_FILTER',
}

export interface ISetTodosRequest {
  type: ActionType.SET_TODOS_REQUEST;
}
export interface IAddTodoRequest {
  type: ActionType.ADD_TODO_REQUEST;
  payload: string;
}
export interface IDeleteTodoRequest {
  type: ActionType.DELETE_TODO_REQUEST;
  payload: string;
}
export interface IUpdateTodoRequest {
  type: ActionType.UPDATE_TODO_REQUEST;
  payload: ITodo;
}
export interface IUpdateTodoAfterDragRequest {
  type: ActionType.UPDATE_TODO_AFTER_DRAG_REQUEST;
  payload: {
    newTodo: ITodo;
    prevTodo: ITodo;
  };
}
export interface IClearCompletedTodoRequest {
  type: ActionType.CLEAR_COMPLETED_TODO_REQUEST;
}
export interface IToggleStatusTodosRequest {
  type: ActionType.TOGGLE_STATUS_TODOS_REQUEST;
  payload: boolean;
}

export interface ISetTodosSuccess {
  type: ActionType.SET_TODOS_SUCCESS;
  payload: Array<ITodo>;
}
export interface IAddTodoSuccess {
  type: ActionType.ADD_TODO_SUCCESS;
  payload: ITodo;
}
export interface IDeleteTodoSuccess {
  type: ActionType.DELETE_TODO_SUCCESS;
  payload: ITodo;
}
export interface IUpdateTodoSuccess {
  type: ActionType.UPDATE_TODO_SUCCESS;
  payload: ITodo;
}
export interface IClearCompletedTodoSuccess {
  type: ActionType.CLEAR_COMPLETED_TODO_SUCCESS;
  payload: Array<ITodo>;
}
export interface IToggleStatusTodosSuccess {
  type: ActionType.TOGGLE_STATUS_TODOS_SUCCESS;
  payload: Array<ITodo>;
}

export interface ISetTodosFailed {
  type: ActionType.SET_TODOS_FAILED;
  payload: string;
}
export interface IAddTodoFailed {
  type: ActionType.ADD_TODO_FAILED;
  payload: string;
}
export interface IDeleteTodoFailed {
  type: ActionType.DELETE_TODO_FAILED;
  payload: string;
}
export interface IUpdateTodoFailed {
  type: ActionType.UPDATE_TODO_FAILED;
  payload: string;
}
export interface IClearCompletedTodoFailed {
  type: ActionType.CLEAR_COMPLETED_TODO_FAILED;
  payload: string;
}
export interface IToggleStatusTodosFailed {
  type: ActionType.TOGGLE_STATUS_TODOS_FAILED;
  payload: string;
}
export interface IChangeFilter {
  type: ActionType.CHANGE_FILTER;
  payload: string;
}

export type Action =
  | ISetTodosSuccess
  | IAddTodoSuccess
  | IDeleteTodoSuccess
  | IUpdateTodoSuccess
  | IClearCompletedTodoSuccess
  | IToggleStatusTodosSuccess
  | IChangeFilter
  | ISetTodosRequest
  | ISetTodosFailed;
