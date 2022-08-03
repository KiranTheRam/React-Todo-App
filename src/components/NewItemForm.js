import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import classes from "./NewItemForm.module.css";

export default function NewItemForm(props) {
  const [isValid, setIsValid] = useState(true);
  const titleInputRef = useRef();
  const unique_id = uuid();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (titleInputRef.current.value.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (titleInputRef.current.value.trim().length > 0) {
      setIsValid(true);
    }

    const enteredTodoTitle = titleInputRef.current.value;

    // Making a todo item from the form info
    const todo = {
      id: unique_id,
      title: enteredTodoTitle,
    };

    console.log(todo.id);

    // Sends the todo object to the parent class. There it will be added to the array
    props.onAddTodo(todo);

    titleInputRef.current.value = null;
  };

  return (
    <form noValidate onSubmit={onSubmitHandler}>
      <div
        className={`${classes.control} ${!isValid && classes.controlInvalid}`}
      >
        <label>Todo Name: </label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
