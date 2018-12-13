import { ActionCreator, Reducer } from 'redux';
import uuid4 from 'uuid/v4';

import { ActionType, IAction, IActionWithoutPayload } from './index';

export interface ITodoState {
  id: string;
  label: string;
  isCompleted: boolean;
}

export interface ITodosState {
  list: ITodoState[];
  inputValue: string;
}

export const initialState: ITodosState = {
  list: [
    {
      id: uuid4(),
      label: 'Sample',
      isCompleted: false
    }
  ],
  inputValue: ''
};

export const changeTodo: ActionCreator<IAction<string>> = (value: string) => ({
  type: ActionType.CHANGE_TODO,
  payload: value
});

export const submitTodo: ActionCreator<IActionWithoutPayload> = () => ({
  type: ActionType.SUBMIT_TODO
});

export const toggleTodo: ActionCreator<IAction<string>> = (id: string) => ({
  type: ActionType.TOGGLE_TODO,
  payload: id
});

export const deleteTodo: ActionCreator<IAction<string>> = (id: string) => ({
  type: ActionType.DELETE_TODO,
  payload: id
});

const reducer: Reducer<ITodosState, IAction<string>> = (
  state: ITodosState = initialState,
  action: IAction<string>
): ITodosState => {
  switch (action.type) {
    case ActionType.CHANGE_TODO:
      return {
        ...state,
        inputValue: action.payload
      };

    case ActionType.SUBMIT_TODO:
      if (!state.inputValue.trim()) {
        return state;
      }
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: uuid4(),
            label: state.inputValue,
            isCompleted: false
          }
        ],
        inputValue: ''
      };

    case ActionType.TOGGLE_TODO:
      const list = [...state.list];
      const item = list.find((e: ITodoState) => e.id === action.payload);
      if (!item) {
        return state;
      }
      item.isCompleted = !item.isCompleted;
      return {
        ...state,
        list
      };

    case ActionType.DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(e => e.id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
