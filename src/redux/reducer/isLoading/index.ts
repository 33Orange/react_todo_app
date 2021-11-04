import { ActionType, Action } from '../../../types/action';

const initialState: boolean = true;

export const isLoadingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.IS_LOADING_TRUE:
      return true;

    case ActionType.IS_LOADING_FALSE:
      return false;

    default:
      return state;
  }
};
