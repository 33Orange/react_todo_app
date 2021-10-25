import { ITodo } from '../../types/todo';
import { ActionType } from '../../types/action';

export const setTodoAction = (payload: Array<ITodo>) => ({ type: ActionType.SET_TODOS, payload });
export const addTodoAction = (payload: ITodo) => ({ type: ActionType.ADD_TODO, payload });
export const deleteTodoAction = (payload: ITodo) => ({ type: ActionType.DELETE_TODO, payload });
export const updateTodoAction = (payload: ITodo) => ({ type: ActionType.UPDATE_TODO, payload });
export const changeFilter = (payload: string) => ({ type: ActionType.CHANGE_FILTER, payload });
