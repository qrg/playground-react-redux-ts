import React, { SyntheticEvent } from 'react';

export interface IProps {
  onChange: (event: SyntheticEvent) => void;
  onSubmit: (event: SyntheticEvent) => void;
  value: string;
}

const Form = ({ onChange, onSubmit, value }: IProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
