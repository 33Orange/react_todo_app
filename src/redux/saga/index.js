import { put, takeEvery } from 'redux-saga/effects';
import { ActionType } from '../../types/action';
import {
  setTodoAction,
  addTodoAction,
  deleteTodoAction,
  updateTodoAction,
} from '../actionCreators';
import ApiService from '../../ApiService';

function* setTodoWorker() {
  const todos = yield ApiService.getTodos().then(response => response.json());
  yield put(setTodoAction(todos));
}
function* addTodoWorker({ payload }) {
  const newTodo = yield ApiService.addTodo(payload).then(response => response.json());
  yield put(addTodoAction(newTodo));
}
function* deleteTodoWorker({ payload }) {
  const deletedTodo = yield ApiService.deleteTodo(payload).then(response => response.json());
  yield put(deleteTodoAction(deletedTodo));
}
function* updateTodoWorker({ payload }) {
  const updatedTodo = yield ApiService.updateTodo(payload).then(response => response.json());
  yield put(updateTodoAction(updatedTodo));
}
function* clearCompletedWorker() {
  const newTodos = yield ApiService.clearCompletedTodo().then(response => response.json());
  yield put(setTodoAction(newTodos));
}
function* toggleStatusAllTodosWorker({ payload }) {
  const newTodos = yield ApiService.toggleStatusAllTodos(payload).then(response => response.json());
  yield put(setTodoAction(newTodos));
}
export function* todoWatcher() {
  yield takeEvery(ActionType.ASYNC_SET_TODOS, setTodoWorker);
  yield takeEvery(ActionType.ASYNC_ADD_TODO, addTodoWorker);
  yield takeEvery(ActionType.ASYNC_DELETE_TODO, deleteTodoWorker);
  yield takeEvery(ActionType.ASYNC_UPDATE_TODO, updateTodoWorker);
  yield takeEvery(ActionType.ASYNC_CLEAR_COMPLETED, clearCompletedWorker);
  yield takeEvery(ActionType.ASYNC_TOGGLE_STATUS, toggleStatusAllTodosWorker);
}
