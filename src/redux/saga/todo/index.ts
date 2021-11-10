import { put, takeEvery, call } from 'redux-saga/effects';
import { ActionType, Action } from '../../../types/action';
import * as actionCreators from '../../actionCreators';
import ApiService from '../../../utils/apiService';
import { ITodo } from '../../../types/todo';

function* setTodo() {
  try {
    const todos: Array<ITodo> = yield call(ApiService.getTodos);
    yield put(actionCreators.setTodosSuccess(todos));
  } catch (error) {
    yield put(actionCreators.setTodosFailed(error));
  }
}
function* addTodo(action: { payload: string; type: ActionType.ADD_TODO_REQUEST }) {
  try {
    const newTodo: ITodo = yield call(ApiService.addTodo, action.payload);
    yield put(actionCreators.addTodoSuccess(newTodo));
  } catch (error) {
    yield put(actionCreators.addTodoFailed(error));
  }
}
function* deleteTodo(action: { payload: string; type: ActionType.DELETE_TODO_REQUEST }) {
  try {
    const deletedTodo: ITodo = yield call(ApiService.deleteTodo, action.payload);
    yield put(actionCreators.deleteTodoSuccess(deletedTodo));
  } catch (error) {
    yield put(actionCreators.deleteTodoFailed(error));
  }
}
function* updateTodo(action: { payload: ITodo; type: ActionType.UPDATE_TODO_REQUEST }) {
  try {
    const updatedTodo: ITodo = yield call(ApiService.updateTodo, action.payload);
    yield put(actionCreators.updateTodoSuccess(updatedTodo));
  } catch (error) {
    yield put(actionCreators.updateTodoFailed(error));
  }
}
function* updateTodoAfterDrag(action: {
  payload: {
    newTodo: ITodo;
    prevTodo: ITodo;
  };
  type: ActionType.UPDATE_TODO_AFTER_DRAG_REQUEST;
}) {
  try {
    const updatedTodo: ITodo = yield call(ApiService.updateTodo, action.payload.newTodo);
    yield put(actionCreators.updateTodoSuccess(updatedTodo));
  } catch (error) {
    if (error === 419) {
      const prevTodo: ITodo = yield call(ApiService.updateTodo, action.payload.prevTodo);
      yield put(actionCreators.updateTodoSuccess(prevTodo));
    }
  }
}
function* clearCompleted() {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.clearCompletedTodo);
    yield put(actionCreators.clearCompletedSuccess(newTodos));
  } catch (error) {
    yield put(actionCreators.clearCompletedFailed(error));
  }
}
function* toggleStatusAllTodos(action: {
  payload: boolean;
  type: ActionType.TOGGLE_STATUS_TODOS_REQUEST;
}) {
  try {
    const newTodos: Array<ITodo> = yield call(ApiService.toggleStatusAllTodos, action.payload);
    yield put(actionCreators.toggleStatusTodosSuccess(newTodos));
  } catch (error) {
    yield put(actionCreators.toggleStatusTodosFailed(error));
  }
}

export function* todoWatcher() {
  yield takeEvery(ActionType.SET_TODOS_REQUEST, setTodo);
  yield takeEvery(ActionType.ADD_TODO_REQUEST, addTodo);
  yield takeEvery(ActionType.DELETE_TODO_REQUEST, deleteTodo);
  yield takeEvery(ActionType.UPDATE_TODO_REQUEST, updateTodo);
  yield takeEvery(ActionType.UPDATE_TODO_AFTER_DRAG_REQUEST, updateTodoAfterDrag);
  yield takeEvery(ActionType.CLEAR_COMPLETED_TODO_REQUEST, clearCompleted);
  yield takeEvery(ActionType.TOGGLE_STATUS_TODOS_REQUEST, toggleStatusAllTodos);
}
