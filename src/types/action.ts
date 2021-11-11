export enum ActionType {
  CHANGE_FILTER = 'CHANGE_FILTER',
}

export interface IChangeFilter {
  type: ActionType.CHANGE_FILTER;
  payload: string;
}
export type Action = IChangeFilter;
