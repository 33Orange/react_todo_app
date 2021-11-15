import { put, takeEvery, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import ApiService from '../../../utils/apiService';
import { ITodo } from '../../../types/todo';
import {
  fetchTodoActions,
  addTodoActions,
  deleteTodoActions,
  updateTodoActions,
  updateTodoOnDragActions,
  deleteCompletedTodosActions,
  toggleTodosActions,
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
function* updateTodoOnDrag(action: {
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
function* deleteCompleted() {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.clearCompletedTodo);
    yield put(deleteCompletedTodosActions.success(newTodos));
  } catch (error) {
    yield put(deleteCompletedTodosActions.failed(error));
  }
}
function* toggleTodos(action: { payload: boolean; type: typeof toggleTodosActions.types.request }) {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.toggleStatusAllTodos, action.payload);
    yield put(toggleTodosActions.success(newTodos));
  } catch (error) {
    yield put(toggleTodosActions.failed(error));
  }
}

export function* todoWatcher() {
  yield takeEvery(fetchTodoActions.types.request, fetchTodo);
  yield takeEvery(addTodoActions.types.request, addTodo);
  yield takeEvery(deleteTodoActions.types.request, deleteTodo);
  yield takeEvery(updateTodoActions.types.request, updateTodo);
  yield takeEvery(updateTodoOnDragActions.types.request, updateTodoOnDrag);
  yield takeEvery(deleteCompletedTodosActions.types.request, deleteCompleted);
  yield takeEvery(toggleTodosActions.types.request, toggleTodos);
}
