import { UserActionType, IAuthorizationError } from '../../types/userAction';
import { IUser } from '../../types/user';
import { createAsyncActions } from '../../utils/createAsyncActions';
export const registerUserAction = createAsyncActions<
  { email: string; password: string },
  IUser,
  string,
  'REGISTER_USER'
>('REGISTER_USER');
export const loginUserAction = createAsyncActions<{ email: string; password: string }, IUser, string, 'LOGIN_USER'>(
  'LOGIN_USER',
);
export const logoutUserAction = createAsyncActions<void, void, string, 'LOGOUT_USER'>('LOGOUT_USER');

export type ActionUser =
  | ReturnType<typeof registerUserAction.request>
  | ReturnType<typeof registerUserAction.success>
  | ReturnType<typeof registerUserAction.failed>
  | ReturnType<typeof loginUserAction.request>
  | ReturnType<typeof loginUserAction.success>
  | ReturnType<typeof loginUserAction.failed>
  | ReturnType<typeof logoutUserAction.request>
  | ReturnType<typeof logoutUserAction.success>
  | ReturnType<typeof logoutUserAction.failed>;

export const authorizationError = (payload: string): IAuthorizationError => ({
  type: UserActionType.AUTHORIZATION_ERROR,
  payload,
});
