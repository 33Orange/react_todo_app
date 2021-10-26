import { IFilterMap } from '../types/todo';

export const filterMap: IFilterMap = {
  all: item => item,
  active: item => !item.isDone,
  completed: item => item.isDone,
};
