const mapDispatchToProps = dispatch => ({
  onGetTodos: list => {
    dispatch({ type: 'UPLOAD_TODOS', todosList: list });
  },
  onAddTodo: newTodo => {
    dispatch({ type: 'ADD_TODO', newTodo });
  },
  onDeleteTodo: deletedTodo => {
    dispatch({ type: 'DELETE_TODO', todoId: deletedTodo._id });
  },
  onUpdateTodo: updatedTodo => {
    dispatch({ type: 'UPDATE_TODO', updatedTodo });
  },
  onChangeFilter: filter => {
    dispatch({ type: 'CHANGE_FILTER', filter });
  },
});

export default mapDispatchToProps;
