const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return [...action.payload];

    case 'ADD_TODO':
      return [...state, action.payload];

    case 'DELETE_TODO':
      return state.filter(item => item._id != action.payload._id);

    case 'UPDATE_TODO':
      return state.map(item => {
        if (item._id == action.payload._id) {
          item = action.payload;
        }
        return item;
      });

    default:
      return state;
  }
};
