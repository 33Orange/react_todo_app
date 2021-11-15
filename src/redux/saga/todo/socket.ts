import { ActionPattern, call, fork, put, take } from 'redux-saga/effects';
import { io, Socket } from 'socket.io-client';
import { eventChannel } from 'redux-saga';
import { baseUrl } from '../../../constants/serverUrl';
import { ITodo } from '../../../types/todo';
import {
  ActionTodo,
  addTodoSync,
  deleteCompletedTodosSync,
  deleteTodoSync,
  toggleStatusAllTodosSync,
  updateTodoSync,
  addTodoActions,
  deleteTodoActions,
  updateTodoActions,
  deleteCompletedTodosActions,
  toggleTodosActions,
} from '../../actionCreators';
import { ActionUser, loginUserAction, logoutUserAction } from '../../actionCreators/userActionCreator';

function connect() {
  const socket = io(baseUrl);
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

function subscribe(socket: Socket) {
  return eventChannel(emit => {
    socket.on('TODO_ADDED', (todo: ITodo) => {
      emit(addTodoSync(todo));
    });
    socket.on('TODO_DELETED', (todo: ITodo) => {
      emit(deleteTodoSync(todo));
    });
    socket.on('TODO_UPDATED', (todo: ITodo) => {
      emit(updateTodoSync(todo));
    });
    socket.on('COMPLETED_TODOS_CLEAR', (todos: Array<ITodo>) => {
      emit(deleteCompletedTodosSync(todos));
    });
    socket.on('TODOS_STATUS_TOGGLED', (todos: Array<ITodo>) => {
      emit(toggleStatusAllTodosSync(todos));
    });
    return () => {};
  });
}

function* read(socket: Socket) {
  const channel: ActionPattern<ActionTodo> = yield call(subscribe, socket);
  while (true) {
    const action: ActionTodo = yield take(channel);
    yield put(action);
  }
}

function* write(socket: Socket) {
  while (true) {
    const actionResponse: ActionTodo = yield take([
      addTodoActions.types.success,
      updateTodoActions.types.success,
      deleteTodoActions.types.success,
      deleteCompletedTodosActions.types.success,
      toggleTodosActions.types.success,
    ]);

    switch (actionResponse.type) {
      case addTodoActions.types.success: {
        const { payload } = actionResponse;
        socket.emit('ADD_TODO', payload);
        break;
      }
      case deleteTodoActions.types.success: {
        const { payload } = actionResponse;
        socket.emit('DELETE_TODO', payload);
        break;
      }
      case updateTodoActions.types.success: {
        const { payload } = actionResponse;
        socket.emit('UPDATE_TODO', payload);
        break;
      }
      case deleteCompletedTodosActions.types.success: {
        const { payload } = actionResponse;
        socket.emit('CLEAR_COMPLETED_TODOS', payload);
        break;
      }
      case toggleTodosActions.types.success: {
        const { payload } = actionResponse;
        socket.emit('TOGGLE_STATUS_TODOS', payload);
        break;
      }
    }
  }
}
function* authorization(socket: Socket) {
  while (true) {
    const actionResponse: ActionUser = yield take([loginUserAction.types.success, logoutUserAction.types.success]);

    switch (actionResponse.type) {
      case loginUserAction.types.success: {
        const { payload } = actionResponse;
        const token = localStorage.getItem('token');
        socket.emit('login', token);
        break;
      }
      case logoutUserAction.types.success: {
        socket.emit('logout');
        break;
      }
    }
  }
}
function* handleIO(socket: Socket) {
  yield fork(read, socket);
  yield fork(write, socket);
  yield fork(authorization, socket);
}

export default function* flow() {
  const socket: Socket = yield call(connect);
  const token = localStorage.getItem('token');
  if (token) {
    socket.emit('login', token);
  } else {
    const { payload }: ReturnType<typeof loginUserAction.success> = yield take(loginUserAction.types.success);
    socket.emit('login', payload);
  }
  yield fork(handleIO, socket);
}
