import { RootState } from '../reducer/index';

export const authorizationErrorSelector = (state: RootState) => state.authorizationError;
export const userSelector = (state: RootState) => state.user.user;
export const isAuthSelector = (state: RootState) => state.user.isAuth;
export const todosSelector = (state: RootState) => state.todos;
export const filterSelector = (state: RootState) => state.filter;
