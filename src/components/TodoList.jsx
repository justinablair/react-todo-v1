import React from "react";
import DeleteTodo from "./DeleteTodo";

function TodoList({ todos, openModal, isDeleteTodoOpen,removeTodo, closeModal }) {
 
  const [updatedTodo, setUpdatedTodo] = useState(todos)

  const [isDeleteTodoOpen, setIsDeleteTodoOpen] = useState(false);

  function handleDeleteButton(index) {
    const removeTodo = todos.filter(todo => todo.id !== id)
    setUpdatedTodo(removeTodo)
  }
  
  return (
    <div>
      {todos.map((todo, index) => (
        <li id={`todo-list-${index}`}>
          {todo.title}
          {todo.completed}
                  
      <button onClick={setIsDeleteTodoOpen} className="btn" id={'delete-todo'}>x</button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
