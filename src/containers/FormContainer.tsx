import React, { FormEvent } from 'react';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import { Dispatch } from 'redux';

import Form from '../components/Form';
import { IRootState } from '../store/createStore';

import { changeTodo, submitTodo } from '../store/modules/todos';

const mapStateToProps = ({ todos }: IRootState) => todos;

const mapDispatchToProps: MapDispatchToPropsFunction<any, any> = (
  dispatch: Dispatch
) => {
  return {
    onChange: (event: FormEvent<HTMLInputElement>) => {
      event.preventDefault();
      dispatch(changeTodo(event.currentTarget.value));
    },
    onSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch(submitTodo());
      event.currentTarget.reset();
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
