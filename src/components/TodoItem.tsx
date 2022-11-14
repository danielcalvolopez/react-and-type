import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = ({ text, onRemoveTodo }) => {
  return (
    <li onClick={onRemoveTodo} className={classes.item}>
      {text}
    </li>
  );
};

export default TodoItem;
