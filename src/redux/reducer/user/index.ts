import { UserAction, UserActionType } from '../../../types/userAction';
import { IUser } from '../../../types/user';

interface State {
  user: IUser;
  isAuth: boolean;
}

const initialState: State = {
  user: {
    email: ' ',
    id: ' ',
  },
  isAuth: false,
};

export const userReducer = (state: State = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case UserActionType.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case UserActionType.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: {
          email: '',
          id: '',
        },
        isAuth: false,
      };

    case UserActionType.CHECK_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    default:
      return state;
  }
};
