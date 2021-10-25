import { ActionType, Action } from '../../../types';

const initialState: string = 'All';

export const filterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};
