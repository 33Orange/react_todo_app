import { ActionType, Action } from '../../../types/action';

const initialState: string = 'all';

export const filterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};
