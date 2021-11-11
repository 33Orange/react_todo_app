import { RootState } from '../reducer/index';

export const authorizationErrorSelector = (state: RootState) => state.user.authorizationError;
export const userSelector = (state: RootState) => state.user.user;
export const isAuthSelector = (state: RootState) => state.user.user.isAuth;
export const todosSelector = (state: RootState) => state.todos.list;
export const todosIsLoadingSelector = (state: RootState) => state.todos.isLoading;
export const filterSelector = (state: RootState) => state.filter;
