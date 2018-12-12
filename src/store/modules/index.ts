export enum ActionType {
  CHANGE_TODO = 'CHANGE_TODO',
  SUBMIT_TODO = 'SUBMIT_TODO',
  CLICK_TODO = 'CLICK_TODO',
  DELETE_TODO = 'DELETE_TODO'
}

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export interface IActionWithoutPayload {
  type: ActionType;
}
