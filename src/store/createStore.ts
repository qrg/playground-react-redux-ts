import {applyMiddleware, combineReducers, compose, createStore, ReducersMapObject} from 'redux';
import thunk from 'redux-thunk';

import todos, {
  initialState as initialTodosState,
  ITodosState
} from './modules/todos';

export interface IRootState {
  todos: ITodosState;
}

const reducer = combineReducers({ todos });

export const initialRootState: IRootState = {
  todos: initialTodosState
};

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
};
