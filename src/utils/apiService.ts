import { ITodo } from '../types/todo';
import { callApi } from './callApi';

const i = 1;

class ApiService {
  getTodos() {
    return callApi('/todos');
  }

  addTodo(value: string) {
    if (value) {
      return callApi('/todos', {
        method: 'post',
        body: { value },
      });
    }
  }

  deleteTodo(todoId: string) {
    return callApi(`/todos/${todoId}`, { method: 'delete' });
  }

  updateTodo(todo: ITodo) {
    return callApi('/todos', { method: 'put', body: todo });
  }

  clearCompletedTodo = () => {
    return callApi('/todos?cleardone=true', { method: 'delete' });
  };

  toggleStatusAllTodos = (status: boolean) => {
    return callApi('/todos/completeall', { method: 'put', body: { status } });
  };
}

export default new ApiService();
