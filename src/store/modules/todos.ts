import { ActionCreator, Reducer } from 'redux';

import { ActionType, IAction, IActionWithoutPayload } from './index';

interface ITodoState {
  label: string;
  done: boolean;
}

export interface ITodosState {
  list: ITodoState[];
  newItem: string;
}

export const initialState: ITodosState = {
  list: [{ label: 'Sample', done: false }],
  newItem: ''
};

export const changeTodo: ActionCreator<IAction<ITodosState>> = value => ({
  type: ActionType.CHANGE_TODO,
  payload: value
});

export const submitTodo: ActionCreator<IActionWithoutPayload> = () => ({
  type: ActionType.SUBMIT_TODO
});

const reducer: Reducer<ITodosState, IAction<string>> = (
  state: ITodosState = initialState,
  action: IAction<string>
): ITodosState => {
  switch (action.type) {
    case ActionType.CHANGE_TODO:
      return {
        ...state,
        newItem: action.payload
      };
    case ActionType.SUBMIT_TODO:
      if (!state.newItem.trim()) {
        return state;
      }
      return {
        ...state,
        list: [
          ...state.list,
          {
            label: state.newItem,
            done: false
          }
        ],
        newItem: ''
      };
    default:
      return state;
  }
};

export default reducer;
