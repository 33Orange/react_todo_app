import { UserActionType, UserAction } from '../../../types/userAction';

const initialState: string = '';

export const authorizationErrorReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.AUTHORIZATION_ERROR:
      return action.payload;

    default:
      return state;
  }
};
