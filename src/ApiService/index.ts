import { baseUrl } from '../constans/serverUrl';
import { createUrl } from '../utils/createQueryString';
import { ITodo } from '../types/todo';

class ApiService {
  getTodos() {
    return fetch(`${baseUrl}/todos`);
  }

  addTodo(value: string) {
    if (value) {
      const todoToSend = JSON.stringify({ value, isDone: false });
      return fetch(`${baseUrl}/todos`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: todoToSend,
      });
    }
  }

  deleteTodo(todoId: string) {
    return fetch(`${baseUrl}/todos/${todoId}`, {
      method: 'delete',
    });
  }

  updateTodo(todo: ITodo) {
    const todoToSend = JSON.stringify(todo);
    return fetch(`${baseUrl}/todos`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: todoToSend,
    });
  }

  clearCompletedTodo = () => {
    return fetch(createUrl(`${baseUrl}/todos`, { cleardone: true }), {
      method: 'delete',
    });
  };

  toggleStatusAllTodos = (status: boolean) => {
    const todoToSend = JSON.stringify({ status });
    return fetch(`${baseUrl}/todos/completeall`, {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: todoToSend,
    });
  };
}

export default new ApiService();
