import { loginUserAction, registerUserAction } from '../redux/actionCreators/userActionCreator';

export enum UserActionType {
  AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
}

export interface IAuthorizationError {
  type: UserActionType.AUTHORIZATION_ERROR;
  payload: string;
}

export interface IRegisterRequestAction {
  payload: { email: string; password: string };
  type: typeof registerUserAction.types.request;
}

export interface ILoginRequestAction {
  payload: { email: string; password: string };
  type: typeof loginUserAction.types.request;
}
export type UserAction = IAuthorizationError;
