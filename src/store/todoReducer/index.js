const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPLOAD_TODOS':
      return { ...state, todos: [...action.todosList] };

    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.newTodo] };

    case 'DELETE_TODO':
      return { ...state, todos: [...state.todos].filter(item => item._id != action.todoId) };

    case 'UPDATE_TODO':
      return {
        ...state,
        todos: [...state.todos].map(item => {
          if (item._id == action.updatedTodo._id) {
            item = action.updatedTodo;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
