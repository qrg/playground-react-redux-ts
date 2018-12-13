import React, { FunctionComponent, FormEvent } from 'react';

export interface IProps {
  onChange: (event: FormEvent) => void;
  onSubmit: (event: FormEvent) => void;
  value: string;
}

const Form: FunctionComponent<IProps> = ({
  onChange,
  onSubmit,
  value
}: IProps) => {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
