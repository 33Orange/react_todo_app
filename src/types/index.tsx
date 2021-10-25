export interface ITodo {
  _id: string;
  value: string;
  isDone: boolean;
}

export interface ITodoListState {
  todos: Array<ITodo>;
  filter: string;
}

//Redux

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
