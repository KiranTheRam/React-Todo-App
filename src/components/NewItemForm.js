import React, { useRef } from "react";
import { v4 as uuid } from "uuid";

export default function NewItemForm(props) {
  const titleInputRef = useRef();
  const unique_id = uuid();

  const onSubmitHandler = (event) => {
    event.preventDefault();

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
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Title</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
