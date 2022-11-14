import React, { useContext } from "react";

import { TodosContext } from "../store/TodosContext";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map(({ id, text }) => (
        <TodoItem
          onRemoveTodo={todosCtx.removeTodo.bind(null, id)}
          key={id}
          text={text}
        />
      ))}
    </ul>
  );
};

export default Todos;
