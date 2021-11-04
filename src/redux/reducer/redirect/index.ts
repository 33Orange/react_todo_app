import { UserAction, UserActionType } from '../../../types/userAction';

const initialState: boolean = false;

export const redirectReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.REDIRECT:
      return action.payload;

    default:
      return state;
  }
};
