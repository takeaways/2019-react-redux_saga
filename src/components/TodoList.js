import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";
const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(todo => {
        const { text, id, done } = todo;
        return <TodoItem key={id} id={id} text={text} done={done} />;
      })}
    </TodoListBlock>
  );
};

export default TodoList;
