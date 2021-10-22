const initialState = 'All';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload;

    default:
      return state;
  }
};
