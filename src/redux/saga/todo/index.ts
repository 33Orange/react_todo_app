import { put, takeEvery, call } from 'redux-saga/effects';
import { ActionType } from '../../../types/action';
import * as actionCreators from '../../actionCreators';
import ApiService from '../../../utils/apiService';
import { ITodo } from '../../../types/todo';

function* setTodo() {
  try {
    const todos: Array<ITodo> = yield call(ApiService.getTodos);
    yield put(actionCreators.setTodosSuccess(todos));
  } catch (e) {
    yield put(actionCreators.setTodosFailed(e));
  }
}
function* addTodo(action: { payload: string }) {
  try {
    const newTodo: ITodo = yield call(ApiService.addTodo, action.payload);
    yield put(actionCreators.addTodoSuccess(newTodo));
  } catch (e) {
    yield put(actionCreators.addTodoFailed(e));
  }
}
function* deleteTodo(action: { payload: string }) {
  try {
    const deletedTodo: ITodo = yield call(ApiService.deleteTodo, action.payload);
    yield put(actionCreators.deleteTodoSuccess(deletedTodo));
  } catch (e) {
    yield put(actionCreators.deleteTodoFailed(e));
  }
}
function* updateTodo(action: { payload: ITodo }) {
  try {
    const updatedTodo: ITodo = yield call(ApiService.updateTodo, action.payload);
    yield put(actionCreators.updateTodoSuccess(updatedTodo));
  } catch (e) {
    yield put(actionCreators.updateTodoFailed(e));
  }
}
function* clearCompleted() {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.clearCompletedTodo);
    yield put(actionCreators.clearCompletedSuccess(newTodos));
  } catch (e) {
    yield put(actionCreators.clearCompletedFailed(e));
  }
}
function* toggleStatusAllTodos(action: { payload: boolean }) {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.toggleStatusAllTodos, action.payload);
    yield put(actionCreators.toggleStatusTodosSuccess(newTodos));
  } catch (e) {
    yield put(actionCreators.toggleStatusTodosFailed(e));
  }
}

export function* todoWatcher() {
  yield takeEvery(ActionType.SET_TODOS_REQUEST as any, setTodo);
  yield takeEvery(ActionType.ADD_TODO_REQUEST as any, addTodo);
  yield takeEvery(ActionType.DELETE_TODO_REQUEST as any, deleteTodo);
  yield takeEvery(ActionType.UPDATE_TODO_REQUEST as any, updateTodo);
  yield takeEvery(ActionType.CLEAR_COMPLETED_TODO_REQUEST as any, clearCompleted);
  yield takeEvery(ActionType.TOGGLE_STATUS_TODOS_REQUEST as any, toggleStatusAllTodos);
}
