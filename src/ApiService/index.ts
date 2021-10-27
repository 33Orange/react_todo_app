import { baseUrl } from '../constans/serverUrl';
import { createUrl } from '../utils/createQueryString';
import { ITodo } from '../types/todo';

interface ICallApiOptions {
  method: string;
  body?: any;
}

const callApi = async (endpoint: string, options: ICallApiOptions = { method: 'get' }) => {
  const valueToSend = JSON.stringify(options.body);
  const response = await fetch(createUrl(`${baseUrl}${endpoint}`), {
    method: options.method,
    headers: { 'Content-Type': 'application/json' },
    body: valueToSend,
  });
  if (response.ok) {
    return new Promise(res => res(response.json()));
  } else {
    throw new Error(response.statusText);
  }
};

class ApiService {
  getTodos() {
    return callApi('/todos');
  }

  addTodo(value: string) {
    if (value) {
      return callApi('/todos', { method: 'post', body: { value, isDone: false } });
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
