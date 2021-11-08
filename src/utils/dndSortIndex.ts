import { ITodo } from '../types/todo';

export const nextSortIndex = (index: number, todos: Array<ITodo>) => {
  const destinationSortIndex = todos[index].sortIndex;
  const nextToDestination = todos[index + 1]?.sortIndex;
  const result = nextToDestination
    ? (destinationSortIndex + nextToDestination) / 2
    : destinationSortIndex + 1;
  return result;
};

export const prevSortIndex = (index: number, todos: Array<ITodo>) => {
  const destinationSortIndex = todos[index].sortIndex;
  const prevToDestination = todos[index - 1]?.sortIndex;
  const result = prevToDestination
    ? (destinationSortIndex + prevToDestination) / 2
    : destinationSortIndex - 1;
  return result;
};
