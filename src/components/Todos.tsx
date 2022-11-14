import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map(({ id, text }) => (
        <TodoItem
          onRemoveTodo={onRemoveTodo.bind(null, id)}
          key={id}
          text={text}
        />
      ))}
    </ul>
  );
};

export default Todos;
