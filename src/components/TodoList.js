import TodoItem from "./TodoItem";
import classes from './TodoList.module.css'

export default function TodoList(props) {

  const deleteItem = (todoToDelete) => {
    props.deleteFromArray(todoToDelete);
  };

  return (
    <div className={classes.list}>
      <ul>
        {props.items.map((todo) => (
            <TodoItem key={todo.id} id={todo.id} title={todo.title} onDeleteTodo={deleteItem}/>
        ))}
      </ul>
    </div>
  );
}
