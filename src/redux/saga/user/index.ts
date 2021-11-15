import { put, takeEvery, call } from 'redux-saga/effects';
import { ILoginRequestAction, IRegisterRequestAction } from '../../../types/userAction';
import {
  registerUserAction,
  loginUserAction,
  logoutUserAction,
  authorizationError,
} from '../../actionCreators/userActionCreator';
import AuthorizationService from '../../../utils/authorizationService';
import { IResponse } from '../../../types/user';

function* register(action: IRegisterRequestAction) {
  try {
    const response: IResponse = yield call(
      AuthorizationService.register,
      action.payload.email,
      action.payload.password,
    );
    localStorage.setItem('token', response.accessToken);
    yield put(registerUserAction.success(response.user));
  } catch (e) {
    yield put(authorizationError(e.message));
  }
}

function* login(action: ILoginRequestAction) {
  try {
    const response: IResponse = yield call(AuthorizationService.login, action.payload.email, action.payload.password);
    localStorage.setItem('token', response.accessToken);
    yield put(loginUserAction.success(response.user));
  } catch (e) {
    yield put(authorizationError(e.message));
  }
}
function* logout() {
  try {
    yield call(AuthorizationService.logout);
    localStorage.removeItem('token');
    yield put(logoutUserAction.success());
  } catch (e) {
    yield put(authorizationError(e));
  }
}

export function* userWatcher() {
  yield takeEvery(registerUserAction.types.request, register);
  yield takeEvery(loginUserAction.types.request, login);
  yield takeEvery(logoutUserAction.types.request, logout);
}
