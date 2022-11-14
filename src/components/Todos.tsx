import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, text }) => (
        <TodoItem key={id} text={text} />
      ))}
    </ul>
  );
};

export default Todos;
