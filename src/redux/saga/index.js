import { put, takeEvery, call } from 'redux-saga/effects';
import { ActionType } from '../../types/action';
import {
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
} from '../actionCreators';
import ApiService from '../../ApiService';

function* setTodoWorker() {
  try {
    const todos = yield call(ApiService.getTodos);
    yield put(setTodoAction(todos));
  } catch (e) {
    console.log(e);
  }
}
function* addTodoWorker({ payload }) {
  try {
    const newTodo = yield call(ApiService.addTodo, payload);
    yield put(addTodoAction(newTodo));
  } catch (e) {
    console.log(e);
  }
}
function* deleteTodoWorker({ payload }) {
  try {
    const deletedTodo = yield call(ApiService.deleteTodo, payload);
    yield put(deleteTodoAction(deletedTodo));
  } catch (e) {
    console.log(e);
  }
}
function* updateTodoWorker({ payload }) {
  try {
    const updatedTodo = yield call(ApiService.updateTodo, payload);
    yield put(updateTodoAction(updatedTodo));
  } catch (e) {
    console.log(e);
  }
}
function* clearCompletedWorker() {
  try {
    const newTodos = yield call(ApiService.clearCompletedTodo);
    yield put(setTodoAction(newTodos));
  } catch (e) {
    console.log(e);
  }
}
function* toggleStatusAllTodosWorker({ payload }) {
  try {
    const newTodos = yield call(ApiService.toggleStatusAllTodos, payload);
    yield put(setTodoAction(newTodos));
  } catch (e) {
    console.log(e);
  }
}

export function* todoWatcher() {
  yield takeEvery(ActionType.ASYNC_SET_TODOS, setTodoWorker);
  yield takeEvery(ActionType.ASYNC_ADD_TODO, addTodoWorker);
  yield takeEvery(ActionType.ASYNC_DELETE_TODO, deleteTodoWorker);
  yield takeEvery(ActionType.ASYNC_UPDATE_TODO, updateTodoWorker);
  yield takeEvery(ActionType.ASYNC_CLEAR_COMPLETED, clearCompletedWorker);
  yield takeEvery(ActionType.ASYNC_TOGGLE_STATUS, toggleStatusAllTodosWorker);
}
