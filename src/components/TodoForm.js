import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import EmptyTaskDialogue from "./EmptyTaskDialogue";
import DeleteTodo from "./DeleteTodo";

function TodoForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((result) => setTodos(result.data));
  }, []);

const openModal = () => {
    setIsOpen(true);
  }

const closeModal = () => {
  setIsOpen(false);
};

  const removeTodo = (e) => {
    const target = e.target;
    if (target.className === "btn") {
        <DeleteTodo  openModal={openModal} isOpen={isOpen} removeTodo={removeTodo}/>
    target.parentNode.parentNode.remove();
    }
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (input === "") {
      // <EmptyTaskDialogue />
      setIsOpen(true);
     
        //   document.body.style.overflow = 'hidden' //prevent
          document.getElementByClassName("btn").disabled = true;
      
      // alert("Enter a task")
    } else {
      setTodos([
        { title: input, id: Math.random(), completed: true },
        ...todos,
      ]);
      setInput("");
    }
  };

  return (
    <div>
      <form id="js-form">
        <input
          type="text"
          className="input"
          placeholder="Enter Task:"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        {isOpen && (
          <div className="modal"  disableBackdrop="true" >
            <button onClick={closeModal} className="close-button">
              x
            </button>
            <p className="emptyDialogText">Please enter a task</p>
          </div>
        )}

        <button type="submit" className="push" onClick={addTodo}>
          Add
        </button>


       



        
      </form>

      <ul id="myUL" onClick={removeTodo}>
        <TodoList todos={todos} />
      </ul>
    </div>
  );
}

export default TodoForm;
