import { put, takeEvery, call } from 'redux-saga/effects';
import { ActionType } from '../../types/action';
import {
  setTodosSuccess,
  addTodoSuccess,
  deleteTodoSuccess,
  updateTodoSuccess,
  clearCompletedSuccess,
  toggleStatusTodosSuccess,
  addTodoFailed,
  deleteTodoFailed,
  updateTodoFailed,
  clearCompletedFailed,
  toggleStatusTodosFailed,
  setTodosFailed,
} from '../actionCreators';
import ApiService from '../../ApiService';

function* setTodoWorker() {
  try {
    const todos = yield call(ApiService.getTodos);
    yield put(setTodosSuccess(todos));
  } catch (e) {
    yield put(setTodosFailed(e));
  }
}
function* addTodoWorker({ payload }) {
  try {
    const newTodo = yield call(ApiService.addTodo, payload);
    yield put(addTodoSuccess(newTodo));
  } catch (e) {
    yield put(addTodoFailed(e));
  }
}
function* deleteTodoWorker({ payload }) {
  try {
    const deletedTodo = yield call(ApiService.deleteTodo, payload);
    yield put(deleteTodoSuccess(deletedTodo));
  } catch (e) {
    yield put(deleteTodoFailed(e));
  }
}
function* updateTodoWorker({ payload }) {
  try {
    const updatedTodo = yield call(ApiService.updateTodo, payload);
    yield put(updateTodoSuccess(updatedTodo));
  } catch (e) {
    yield put(updateTodoFailed(e));
  }
}
function* clearCompletedWorker() {
  try {
    const newTodos = yield call(ApiService.clearCompletedTodo);
    yield put(clearCompletedSuccess(newTodos));
  } catch (e) {
    yield put(clearCompletedFailed(e));
  }
}
function* toggleStatusAllTodosWorker({ payload }) {
  try {
    const newTodos = yield call(ApiService.toggleStatusAllTodos, payload);
    yield put(toggleStatusTodosSuccess(newTodos));
  } catch (e) {
    yield put(toggleStatusTodosFailed(e));
  }
}

export function* todoWatcher() {
  yield takeEvery(ActionType.SET_TODOS_REQUEST, setTodoWorker);
  yield takeEvery(ActionType.ADD_TODO_REQUEST, addTodoWorker);
  yield takeEvery(ActionType.DELETE_TODO_REQUEST, deleteTodoWorker);
  yield takeEvery(ActionType.UPDATE_TODO_REQUEST, updateTodoWorker);
  yield takeEvery(ActionType.CLEAR_COMPLETED_TODO_REQUEST, clearCompletedWorker);
  yield takeEvery(ActionType.TOGGLE_STATUS_TODOS_REQUEST, toggleStatusAllTodosWorker);
}
