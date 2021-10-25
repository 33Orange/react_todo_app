import { ITodo } from './todo';

export enum ActionType {
  SET_TODOS = 'SET_TODOS',
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  CHANGE_FILTER = 'CHANGE_FILTER',
}

interface SetTodoAction {
  type: ActionType.SET_TODOS;
  payload: Array<ITodo>;
}

interface AddTodoAction {
  type: ActionType.ADD_TODO;
  payload: ITodo;
}

interface DeleteTodoAction {
  type: ActionType.DELETE_TODO;
  payload: ITodo;
}

interface UpdateTodoAction {
  type: ActionType.UPDATE_TODO;
  payload: ITodo;
}

interface ChangeFilter {
  type: ActionType.CHANGE_FILTER;
  payload: string;
}

export type Action =
  | SetTodoAction
  | AddTodoAction
  | DeleteTodoAction
  | UpdateTodoAction
  | ChangeFilter;
