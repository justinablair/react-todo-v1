import React from "react";
import DeleteTodo from "./DeleteTodo";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <li>
          {todo.title}
          {todo.completed}
          <DeleteTodo />
        </li>
      ))}
    </div>
  );
}

export default TodoList;
