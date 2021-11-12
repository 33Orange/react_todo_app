import { ITodo } from './todo';

export enum ActionType {
  CHANGE_FILTER = 'CHANGE_FILTER',
}

export interface IChangeFilter {
  type: ActionType.CHANGE_FILTER;
  payload: string;
}

export interface IUpdateOnDragPayload {
  newTodo: ITodo;
  prevTodo: ITodo;
}
export type Action = IChangeFilter;
