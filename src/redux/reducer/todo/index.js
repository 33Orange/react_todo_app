const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_TODOS':
      return [...action.todosList];

    case 'ADD_TODO':
      return [...state, action.newTodo];

    case 'DELETE_TODO':
      return [...state.filter(item => item._id != action.todoId)];

    case 'UPDATE_TODO':
      return [
        ...state.map(item => {
          if (item._id == action.updatedTodo._id) {
            item = action.updatedTodo;
          }
          return item;
        }),
      ];

    default:
      return state;
  }
};

export default todoReducer;
