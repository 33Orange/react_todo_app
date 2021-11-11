import { put, takeEvery, call } from 'redux-saga/effects';
import { ActionType, Action } from '../../../types/action';
// import * as actionCreators from '../../actionCreators';
import ApiService from '../../../utils/apiService';
import { ITodo } from '../../../types/todo';
import {
  fetchTodoActions,
  addTodoActions,
  deleteTodoActions,
  updateTodoActions,
  updateTodoOnDragActions,
  clearCompletedTodoActions,
  toggleCompletedTodoActions,
} from '../../actionCreators';
function* fetchTodo() {
  try {
    const todos: Array<ITodo> = yield call(ApiService.getTodos);
    yield put(fetchTodoActions.success(todos));
  } catch (error) {
    yield put(fetchTodoActions.failed(error));
  }
}
function* addTodo(action: { payload: string; type: typeof addTodoActions.types.request }) {
  try {
    const newTodo: ITodo = yield call(ApiService.addTodo, action.payload);
    yield put(addTodoActions.success(newTodo));
  } catch (error) {
    yield put(addTodoActions.failed(error));
  }
}
function* deleteTodo(action: { payload: string; type: typeof deleteTodoActions.types.request }) {
  try {
    const deletedTodo: ITodo = yield call(ApiService.deleteTodo, action.payload);
    yield put(deleteTodoActions.success(deletedTodo));
  } catch (error) {
    yield put(deleteTodoActions.failed(error));
  }
}
function* updateTodo(action: { payload: ITodo; type: typeof updateTodoActions.types.request }) {
  try {
    const updatedTodo: ITodo = yield call(ApiService.updateTodo, action.payload);
    yield put(updateTodoActions.success(updatedTodo));
  } catch (error) {
    yield put(updateTodoActions.failed(error));
  }
}
function* updateTodoAfterDrag(action: {
  payload: {
    newTodo: ITodo;
    prevTodo: ITodo;
  };
  type: typeof updateTodoOnDragActions.types.request;
}) {
  try {
    const updatedTodo: ITodo = yield call(ApiService.updateTodo, action.payload.newTodo);
    yield put(updateTodoActions.success(updatedTodo));
  } catch (error) {
    if (error === 419) {
      const prevTodo: ITodo = yield call(ApiService.updateTodo, action.payload.prevTodo);
      yield put(updateTodoActions.success(prevTodo));
    }
  }
}
function* clearCompleted() {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.clearCompletedTodo);
    yield put(clearCompletedTodoActions.success(newTodos));
  } catch (error) {
    yield put(clearCompletedTodoActions.failed(error));
  }
}
function* toggleStatusAllTodos(action: { payload: boolean; type: typeof toggleCompletedTodoActions.types.request }) {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.toggleStatusAllTodos, action.payload);
    yield put(toggleCompletedTodoActions.success(newTodos));
  } catch (error) {
    yield put(toggleCompletedTodoActions.failed(error));
  }
}

export function* todoWatcher() {
  yield takeEvery(fetchTodoActions.types.request, fetchTodo);
  yield takeEvery(addTodoActions.types.request, addTodo);
  yield takeEvery(deleteTodoActions.types.request, deleteTodo);
  yield takeEvery(updateTodoActions.types.request, updateTodo);
  yield takeEvery(updateTodoOnDragActions.types.request, updateTodoAfterDrag);
  yield takeEvery(clearCompletedTodoActions.types.request, clearCompleted);
  yield takeEvery(toggleCompletedTodoActions.types.request, toggleStatusAllTodos);
}
