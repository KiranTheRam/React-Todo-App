import React, { useState } from "react";
import TodoList from "../components/TodoList";
import NewItemForm from "../components/NewItemForm";
import Card from "../ui/Card";
import classes from "./Homepage.module.css";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Walk the dog",
  },
  {
    id: 2,
    title: "Build PC",
  },
  {
    id: 3,
    title: "Build a React App",
  },
];

export default function Homepage() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const addTodoHandler = (newTodo) => {
    // Chnage state using the setTodos function
    // Take the previous array of todos and use it to make a new array with the new todo at the top
    setTodos((prevTodos) => {
      return [newTodo, ...prevTodos];
    });
  };

  // Receives the title of the todo, then filters the array to only have elements NOT equal to that name
  const todoDeletionhandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos.filter((item) => item.id !== todo)];
      // return [...prevTodos.filter((item) => item.id !== todo)];
    });
  };

  return (
    <div>
      <div className={classes.todoForm}>

        <div className={classes.heading}>
          <h1>Your Todos</h1>
        </div>

        <Card>
          <NewItemForm onAddTodo={addTodoHandler} />
        </Card>

      </div>

      <div className={classes.todoList}>
        <TodoList items={todos} deleteFromArray={todoDeletionhandler} />
      </div>
      
    </div>
  );
}
