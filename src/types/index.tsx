export interface ITodo {
  _id: string;
  value: string;
  isDone: boolean;
}

export interface ITodoListState {
  todos: Array<ITodo>;
  filter: string;
}
