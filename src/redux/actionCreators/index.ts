import { ITodo } from '../../types/todo';
import {
  ActionType,
  IAddTodoFailed,
  IAddTodoRequest,
  IAddTodoSuccess,
  IClearCompletedTodoFailed,
  IClearCompletedTodoRequest,
  IClearCompletedTodoSuccess,
  IDeleteTodoFailed,
  IDeleteTodoRequest,
  IDeleteTodoSuccess,
  IIsLoadingFalse,
  IIsLoadingTrue,
  ISetTodosFailed,
  ISetTodosRequest,
  ISetTodosSuccess,
  IToggleStatusTodosFailed,
  IToggleStatusTodosRequest,
  IToggleStatusTodosSuccess,
  IUpdateTodoAfterDragRequest,
  IUpdateTodoFailed,
  IUpdateTodoRequest,
  IUpdateTodoSuccess,
} from '../../types/action';

export const setTodosRequest = (): ISetTodosRequest => ({
  type: ActionType.SET_TODOS_REQUEST,
});
export const addTodoRequest = (payload: string): IAddTodoRequest => ({
  type: ActionType.ADD_TODO_REQUEST,
  payload,
});
export const deleteTodoRequest = (payload: string): IDeleteTodoRequest => ({
  type: ActionType.DELETE_TODO_REQUEST,
  payload,
});
export const updateTodoRequest = (payload: ITodo): IUpdateTodoRequest => ({
  type: ActionType.UPDATE_TODO_REQUEST,
  payload,
});
export const updateTodoAfterDrag = (payload: {
  newTodo: ITodo;
  prevTodo: ITodo;
}): IUpdateTodoAfterDragRequest => ({
  type: ActionType.UPDATE_TODO_AFTER_DRAG_REQUEST,
  payload,
});
export const clearCompletedRequest = (): IClearCompletedTodoRequest => ({
  type: ActionType.CLEAR_COMPLETED_TODO_REQUEST,
});
export const toggleStatusTodosRequest = (payload: boolean): IToggleStatusTodosRequest => ({
  type: ActionType.TOGGLE_STATUS_TODOS_REQUEST,
  payload,
});

export const setTodosSuccess = (payload: Array<ITodo>): ISetTodosSuccess => ({
  type: ActionType.SET_TODOS_SUCCESS,
  payload,
});
export const addTodoSuccess = (payload: ITodo): IAddTodoSuccess => ({
  type: ActionType.ADD_TODO_SUCCESS,
  payload,
});
export const deleteTodoSuccess = (payload: ITodo): IDeleteTodoSuccess => ({
  type: ActionType.DELETE_TODO_SUCCESS,
  payload,
});
export const updateTodoSuccess = (payload: ITodo): IUpdateTodoSuccess => ({
  type: ActionType.UPDATE_TODO_SUCCESS,
  payload,
});
export const clearCompletedSuccess = (payload: Array<ITodo>): IClearCompletedTodoSuccess => ({
  type: ActionType.CLEAR_COMPLETED_TODO_SUCCESS,
  payload,
});
export const toggleStatusTodosSuccess = (payload: Array<ITodo>): IToggleStatusTodosSuccess => ({
  type: ActionType.TOGGLE_STATUS_TODOS_SUCCESS,
  payload,
});

export const setTodosFailed = (payload: string): ISetTodosFailed => ({
  type: ActionType.SET_TODOS_FAILED,
  payload,
});
export const addTodoFailed = (payload: string): IAddTodoFailed => ({
  type: ActionType.ADD_TODO_FAILED,
  payload,
});
export const deleteTodoFailed = (payload: string): IDeleteTodoFailed => ({
  type: ActionType.DELETE_TODO_FAILED,
  payload,
});
export const updateTodoFailed = (payload: string): IUpdateTodoFailed => ({
  type: ActionType.UPDATE_TODO_FAILED,
  payload,
});
export const clearCompletedFailed = (payload: string): IClearCompletedTodoFailed => ({
  type: ActionType.CLEAR_COMPLETED_TODO_FAILED,
  payload,
});
export const toggleStatusTodosFailed = (payload: string): IToggleStatusTodosFailed => ({
  type: ActionType.TOGGLE_STATUS_TODOS_FAILED,
  payload,
});

export const changeFilter = (payload: string) => ({ type: ActionType.CHANGE_FILTER, payload });

export const isLoadingTrue = (): IIsLoadingTrue => ({ type: ActionType.IS_LOADING_TRUE });
export const isLoadingFalse = (): IIsLoadingFalse => ({ type: ActionType.IS_LOADING_FALSE });
