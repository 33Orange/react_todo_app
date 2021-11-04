import {
  ILoginUserFailed,
  ILoginUserRequest,
  ILoginUserSuccess,
  ILogoutUserFailed,
  ILogoutUserRequest,
  ILogoutUserSuccess,
  IRegisterUserFailed,
  IRegisterUserRequest,
  IRegisterUserSuccess,
  ICheckUserRequest,
  UserActionType,
  ICheckUserSuccess,
  ICheckUserFailed,
  IRedirect,
} from '../../types/userAction';
import { IUser } from '../../types/user';

export const registerUserRequest = (payload: {
  email: string;
  password: string;
}): IRegisterUserRequest => ({
  type: UserActionType.REGISTER_USER_REQUEST,
  payload,
});
export const loginUserRequest = (payload: {
  email: string;
  password: string;
}): ILoginUserRequest => ({
  type: UserActionType.LOGIN_USER_REQUEST,
  payload,
});
export const logoutUserRequest = (): ILogoutUserRequest => ({
  type: UserActionType.LOGOUT_USER_REQUEST,
});
export const checkUserRequest = (): ICheckUserRequest => ({
  type: UserActionType.CHECK_USER_REQUEST,
});

export const registerUserSuccess = (payload: IUser): IRegisterUserSuccess => ({
  type: UserActionType.REGISTER_USER_SUCCESS,
  payload,
});
export const loginUserSuccess = (payload: IUser): ILoginUserSuccess => ({
  type: UserActionType.LOGIN_USER_SUCCESS,
  payload,
});
export const logoutUserSuccess = (): ILogoutUserSuccess => ({
  type: UserActionType.LOGOUT_USER_SUCCESS,
});
export const checkUserSuccess = (payload: IUser): ICheckUserSuccess => ({
  type: UserActionType.CHECK_USER_SUCCESS,
  payload,
});

export const registerUserFailed = (payload: string): IRegisterUserFailed => ({
  type: UserActionType.REGISTER_USER_FAILED,
  payload,
});
export const loginUserFailed = (payload: string): ILoginUserFailed => ({
  type: UserActionType.LOGIN_USER_FAILED,
  payload,
});
export const logoutUserFailed = (payload: string): ILogoutUserFailed => ({
  type: UserActionType.LOGOUT_USER_FAILED,
  payload,
});
export const checkUserFailed = (payload: string): ICheckUserFailed => ({
  type: UserActionType.CHECK_USER_FAILED,
  payload,
});

export const redirect = (payload: boolean): IRedirect => ({
  type: UserActionType.REDIRECT,
  payload,
});
