import { ITodo } from '../../types/todo';
import {
  AsyncActionType,
  IAsyncAddTodoAction,
  IAsyncClearCompletedAction,
  IAsyncDeleteTodoAction,
  IAsyncSetTodoAction,
  IAsyncToggleStatusAllTodosAction,
  IAsyncUpdateTodoAction,
} from '../../types/asyncAction';

export const asyncSetTodoAction = (): IAsyncSetTodoAction => ({
  type: AsyncActionType.ASYNC_SET_TODOS,
});
export const asyncAddTodoAction = (payload: string): IAsyncAddTodoAction => ({
  type: AsyncActionType.ASYNC_ADD_TODO,
  payload,
});
export const asyncDeleteTodoAction = (payload: string): IAsyncDeleteTodoAction => ({
  type: AsyncActionType.ASYNC_DELETE_TODO,
  payload,
});
export const asyncUpdateTodoAction = (payload: ITodo): IAsyncUpdateTodoAction => ({
  type: AsyncActionType.ASYNC_UPDATE_TODO,
  payload,
});
export const asyncClearCompletedAction = (): IAsyncClearCompletedAction => ({
  type: AsyncActionType.ASYNC_CLEAR_COMPLETED,
});
export const asyncToggleStatusAllTodosAction = (
  payload: boolean,
): IAsyncToggleStatusAllTodosAction => ({
  type: AsyncActionType.ASYNC_TOGGLE_STATUS,
  payload,
});
