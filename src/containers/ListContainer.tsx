import React, { MouseEvent } from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Dispatch } from 'redux';

import List from '../components/List';
import { IRootState } from '../store/createStore';
import { toggleTodo, deleteTodo } from '../store/modules/todos';

const mapStateToProps = ({ todos: {list} }: IRootState) => ({
  list
});

const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = (
    dispatch: Dispatch
) => {
  return {
    onToggleTodo: (id: string) => {
      dispatch(toggleTodo(id));
    },
    onDeleteTodo: (id: string) => {
      dispatch(deleteTodo(id));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
