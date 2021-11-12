import { ITodo } from '../../types/todo';
import { ActionType, IUpdateOnDragPayload } from '../../types/action';
import { createAsyncActions } from '../../utils/createAsyncActions';

export const fetchTodoActions = createAsyncActions<void, Array<ITodo>, string, 'FETCH_TODO'>('FETCH_TODO');
export const addTodoActions = createAsyncActions<string, ITodo, string, 'ADD_TODO'>('ADD_TODO');
export const deleteTodoActions = createAsyncActions<string, ITodo, string, 'DELETE_TODO'>('DELETE_TODO');
export const updateTodoActions = createAsyncActions<ITodo, ITodo, string, 'UPDATE_TODO'>('UPDATE_TODO');
export const clearCompletedTodoActions = createAsyncActions<void, Array<ITodo>, string, 'CLEAR_COMPLETED_TODO'>(
  'CLEAR_COMPLETED_TODO',
);
export const updateTodoOnDragActions = createAsyncActions<IUpdateOnDragPayload, ITodo, string, 'UPDATE_TODO_ONDRAG'>(
  'UPDATE_TODO_ONDRAG',
);

export const toggleCompletedTodoActions = createAsyncActions<boolean, Array<ITodo>, string, 'TOGGLE_COMPLETED_TODO'>(
  'TOGGLE_COMPLETED_TODO',
);

export const changeFilter = (payload: string) => ({ type: ActionType.CHANGE_FILTER, payload });

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
  | ReturnType<typeof clearCompletedTodoActions.success>
  | ReturnType<typeof clearCompletedTodoActions.failed>
  | ReturnType<typeof updateTodoOnDragActions.success>
  | ReturnType<typeof updateTodoOnDragActions.failed>
  | ReturnType<typeof toggleCompletedTodoActions.success>
  | ReturnType<typeof toggleCompletedTodoActions.failed>;
