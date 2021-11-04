import { put, takeEvery, call } from 'redux-saga/effects';
import { UserActionType } from '../../../types/userAction';
import * as UserActionCreators from '../../actionCreators/userActionCreator';
import AuthorizationService from '../../../utils/authorizationService';
import { IResponse } from '../../../types/user';
import { isLoadingFalse, isLoadingTrue } from '../../actionCreators';

function* register(action: { payload: { email: string; password: string } }) {
  try {
    const response: IResponse = yield call(
      AuthorizationService.register,
      action.payload.email,
      action.payload.password,
    );
    localStorage.setItem('token', response.accessToken);
    yield put(UserActionCreators.registerUserSuccess(response.user));
    yield put(UserActionCreators.redirect(true));
  } catch (e) {
    yield put(UserActionCreators.registerUserFailed(e));
  }
}

function* login(action: { payload: { email: string; password: string } }) {
  try {
    const response: IResponse = yield call(
      AuthorizationService.login,
      action.payload.email,
      action.payload.password,
    );
    localStorage.setItem('token', response.accessToken);
    yield put(UserActionCreators.loginUserSuccess(response.user));
    yield put(UserActionCreators.redirect(true));
  } catch (e) {
    yield put(UserActionCreators.loginUserFailed(e));
  }
}
function* logout() {
  try {
    yield call(AuthorizationService.logout);
    localStorage.removeItem('token');
    yield put(UserActionCreators.logoutUserSuccess());
  } catch (e) {
    yield put(UserActionCreators.logoutUserFailed(e));
  }
}

function* checkAuth() {
  yield put(isLoadingTrue());
  try {
    const response: IResponse = yield call(AuthorizationService.checkAuth);
    localStorage.setItem('token', response.accessToken);
    yield put(UserActionCreators.checkUserSuccess(response.user));
  } catch (e) {
    yield put(UserActionCreators.checkUserFailed(e));
  } finally {
    yield put(isLoadingFalse());
  }
}

export function* userWatcher() {
  yield takeEvery(UserActionType.REGISTER_USER_REQUEST as any, register);
  yield takeEvery(UserActionType.LOGIN_USER_REQUEST as any, login);
  yield takeEvery(UserActionType.LOGOUT_USER_REQUEST as any, logout);
  yield takeEvery(UserActionType.CHECK_USER_REQUEST as any, checkAuth);
}
