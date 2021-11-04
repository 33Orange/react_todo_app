import { IUser } from './user';

export enum UserActionType {
  REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILED = 'REGISTER_USER_FAILED',

  LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST',
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCES',
  LOGIN_USER_FAILED = 'LOGIN_USER_FAILED',

  LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST',
  LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS',
  LOGOUT_USER_FAILED = 'LOGOUT_USER_FAILED',

  CHECK_USER_REQUEST = 'CHECK_USER_REQUEST',
  CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS',
  CHECK_USER_FAILED = 'CHECK_USER_FAILED',

  REDIRECT = 'REDIRECT',
}

export interface IRegisterUserRequest {
  type: UserActionType.REGISTER_USER_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}
export interface ILoginUserRequest {
  type: UserActionType.LOGIN_USER_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}
export interface ILogoutUserRequest {
  type: UserActionType.LOGOUT_USER_REQUEST;
}
export interface ICheckUserRequest {
  type: UserActionType.CHECK_USER_REQUEST;
}

export interface IRegisterUserSuccess {
  type: UserActionType.REGISTER_USER_SUCCESS;
  payload: IUser;
}
export interface ILoginUserSuccess {
  type: UserActionType.LOGIN_USER_SUCCESS;
  payload: IUser;
}
export interface ILogoutUserSuccess {
  type: UserActionType.LOGOUT_USER_SUCCESS;
}
export interface ICheckUserSuccess {
  type: UserActionType.CHECK_USER_SUCCESS;
  payload: IUser;
}

export interface IRegisterUserFailed {
  type: UserActionType.REGISTER_USER_FAILED;
  payload: string;
}
export interface ILoginUserFailed {
  type: UserActionType.LOGIN_USER_FAILED;
  payload: string;
}
export interface ILogoutUserFailed {
  type: UserActionType.LOGOUT_USER_FAILED;
  payload: string;
}
export interface ICheckUserFailed {
  type: UserActionType.CHECK_USER_FAILED;
  payload: string;
}

export interface IRedirect {
  type: UserActionType.REDIRECT;
  payload: boolean;
}

export type UserAction =
  | IRegisterUserSuccess
  | ILoginUserSuccess
  | ILogoutUserSuccess
  | ICheckUserSuccess
  | IRedirect;
