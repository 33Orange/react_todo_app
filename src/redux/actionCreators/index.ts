import { ITodo } from '../../types/todo';
import {
  ActionType,
  IAddTodoSync,
  IDeleteTodoSync,
  IUpdateOnDragPayload,
  IUpdateTodoSync,
  IUpdateTodoOnDragSync,
  IClearCompletedSync,
  IToggleStatusAllTodosSync,
} from '../../types/action';
import { createAsyncActions } from '../../utils/createAsyncActions';

export const fetchTodoActions = createAsyncActions<void, Array<ITodo>, string, 'FETCH_TODO'>('FETCH_TODO');
export const addTodoActions = createAsyncActions<string, ITodo, string, 'ADD_TODO'>('ADD_TODO');
export const deleteTodoActions = createAsyncActions<string, ITodo, string, 'DELETE_TODO'>('DELETE_TODO');
export const updateTodoActions = createAsyncActions<ITodo, ITodo, string, 'UPDATE_TODO'>('UPDATE_TODO');
export const deleteCompletedTodosActions = createAsyncActions<void, Array<ITodo>, string, 'DELETE_COMPLETED_TODOS'>(
  'DELETE_COMPLETED_TODOS',
);
export const updateTodoOnDragActions = createAsyncActions<IUpdateOnDragPayload, ITodo, string, 'UPDATE_TODO_ONDRAG'>(
  'UPDATE_TODO_ONDRAG',
);

export const toggleTodosActions = createAsyncActions<boolean, Array<ITodo>, string, 'TOGGLE_COMPLETED_TODO'>(
  'TOGGLE_COMPLETED_TODO',
);

export const changeFilter = (payload: string) => ({ type: ActionType.CHANGE_FILTER, payload });

export const addTodoSync = (payload: ITodo) => ({ type: ActionType.ADD_TODO_SYNC, payload });
export const deleteTodoSync = (payload: ITodo) => ({ type: ActionType.DELETE_TODO_SYNC, payload });
export const updateTodoSync = (payload: ITodo) => ({ type: ActionType.UPDATE_TODO_SYNC, payload });
export const updateTodoOnDragSync = (payload: ITodo) => ({ type: ActionType.UPDATE_TODO_ON_DRAG_SYNC, payload });
export const deleteCompletedTodosSync = (payload: Array<ITodo>) => ({
  type: ActionType.DELETE_COMPLETED_TODOS_SYNC,
  payload,
});
export const toggleStatusAllTodosSync = (payload: Array<ITodo>) => ({
  type: ActionType.TOGGLE_STATUS_ALL_TODOS_SYNC,
  payload,
});

export type ActionTodo =
  | ReturnType<typeof fetchTodoActions.request>
  | ReturnType<typeof fetchTodoActions.success>
  | ReturnType<typeof fetchTodoActions.failed>
  | ReturnType<typeof addTodoActions.success>
  | ReturnType<typeof addTodoActions.failed>
  | ReturnType<typeof deleteTodoActions.success>
  | ReturnType<typeof deleteTodoActions.failed>
  | ReturnType<typeof updateTodoActions.success>
  | ReturnType<typeof updateTodoActions.failed>
  | ReturnType<typeof deleteCompletedTodosActions.success>
  | ReturnType<typeof deleteCompletedTodosActions.failed>
  | ReturnType<typeof updateTodoOnDragActions.success>
  | ReturnType<typeof updateTodoOnDragActions.failed>
  | ReturnType<typeof toggleTodosActions.success>
  | ReturnType<typeof toggleTodosActions.failed>
  | IAddTodoSync
  | IDeleteTodoSync
  | IUpdateTodoSync
  | IUpdateTodoOnDragSync
  | IClearCompletedSync
  | IToggleStatusAllTodosSync;
