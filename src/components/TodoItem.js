import React from "react";
import Card from "../ui/Card";
import classes from "./TodoItem.module.css";

export default function TodoItem(props) {

  const removeTodo = (event) => {
    props.onDeleteTodo(props.id);
  };

  return (
    <div className={classes.item}>
      <li>
        <Card>
          <h5>{props.title}</h5>
          <button type='button' onClick={removeTodo}>Delete</button>
        </Card>
      </li>
    </div>
  );
}
