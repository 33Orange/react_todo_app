import { ITodo } from '../../types/todo';
import { ActionType } from '../../types/action';

export const setTodoAction = (payload: Array<ITodo>) => ({ type: ActionType.SET_TODOS, payload });
export const asyncSetTodoAction = () => ({ type: ActionType.ASYNC_SET_TODOS });

export const addTodoAction = (payload: ITodo) => ({ type: ActionType.ADD_TODO, payload });
export const asyncAddTodoAction = (payload: string) => ({
  type: ActionType.ASYNC_ADD_TODO,
  payload,
});

export const deleteTodoAction = (payload: ITodo) => ({ type: ActionType.DELETE_TODO, payload });
export const asyncDeleteTodoAction = (payload: string) => ({
  type: ActionType.ASYNC_DELETE_TODO,
  payload,
});

export const updateTodoAction = (payload: ITodo) => ({ type: ActionType.UPDATE_TODO, payload });
export const asyncUpdateTodoAction = (payload: ITodo) => ({
  type: ActionType.ASYNC_UPDATE_TODO,
  payload,
});

export const asyncClearCompleted = () => ({ type: ActionType.ASYNC_CLEAR_COMPLETED });
export const asyncToggleStatusAllTodos = (payload: boolean) => ({
  type: ActionType.ASYNC_TOGGLE_STATUS,
  payload,
});

export const changeFilter = (payload: string) => ({ type: ActionType.CHANGE_FILTER, payload });
