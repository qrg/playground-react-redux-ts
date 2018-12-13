import React, {
  FunctionComponent,
  MouseEvent,
} from 'react';

import styled from 'styled-components';

import { ITodoState } from '../store/modules/todos';

export interface IItemProps extends ITodoState {
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export interface IListProps {
  list: IItemProps[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const Item = ({
  id,
  label,
  isCompleted,
  onToggleTodo,
  onDeleteTodo
}: IItemProps) => {
  const onClickLabel = (e: MouseEvent) => {
    e.preventDefault();
    onToggleTodo(id);
  };
  const onToggleCheckbox = () => {
    onToggleTodo(id);
  };
  const onClickDeleteButton = (e: MouseEvent) => {
    e.preventDefault();
    onDeleteTodo(id);
  };

  return (
    <li>
      <input id={id} type="checkbox" checked={isCompleted} onChange={onToggleCheckbox} />
      <Label htmlFor={id} onClick={onClickLabel}>{label}</Label>
      <DeleteButton type="button" onClick={onClickDeleteButton}>
        Delete
      </DeleteButton>
    </li>
  );
};

const List: FunctionComponent<IListProps> = ({
  list,
  onToggleTodo,
  onDeleteTodo
}: IListProps) => {
  const items = list.map((item, i) => {
    const props = { ...item, onToggleTodo, onDeleteTodo };
    return <Item key={i} {...props} />;
  });

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default List;

const Label = styled.label`
  user-select: none;
`;

const DeleteButton = styled.button`
  user-select: none;
`;
