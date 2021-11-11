import { UserAction, UserActionType } from '../../../types/userAction';
import { IUser } from '../../../types/user';
import { combineReducers } from 'redux';
import {
  ActionUser,
  registerUserAction,
  loginUserAction,
  logoutUserAction,
} from '../../actionCreators/userActionCreator';

interface UserState {
  user: IUser;
  isAuth: boolean;
}
const UserInitialState: UserState = {
  user: {
    email: ' ',
    id: ' ',
  },
  isAuth: !!localStorage.getItem('token'),
};

const userReducer = (state: UserState = UserInitialState, action: ActionUser) => {
  switch (action.type) {
    case registerUserAction.types.success:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case loginUserAction.types.success:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case logoutUserAction.types.success:
      return {
        ...state,
        user: {
          email: '',
          id: '',
        },
        isAuth: false,
      };

    default:
      return state;
  }
};

const initialStateAuthorizationError: string = '';

const authorizationErrorReducer = (state = initialStateAuthorizationError, action: UserAction) => {
  switch (action.type) {
    case UserActionType.AUTHORIZATION_ERROR:
      return action.payload;

    default:
      return state;
  }
};

export const userReducers = combineReducers({
  user: userReducer,
  authorizationError: authorizationErrorReducer,
});
