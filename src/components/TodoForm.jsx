import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import EmptyTaskDialogue from "./EmptyTaskDialogue";
import DeleteTodo from "./DeleteTodo";

function TodoForm() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  //EMPTY INPUT MODAL STATE
  const [isEmptyInputOpen, setIsEmptyInputOpen] = useState(false);
  //DELETE TODO MODAL STATE

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((result) => setTodos(result.data));
  }, []);

  const openModal = () => {
    setIsEmptyInputOpen(true);
    setIsDeleteTodoOpen(true);
  };

  const closeModal = () => {
    setIsEmptyInputOpen(false);
    setIsDeleteTodoOpen(false);
  };


  // const deleteTodoModal=(e)=>{
  //   e.preventDefault();
  //   //TARGET IS MODALS CONTINUE BUTTON
  //   const target=e.target;
  //   if (target.className==="continue"){
  //     removeTodo()
  //   }
  // }

  const removeTodo = (e) => {
    e.preventDefault();
    const target = e.target;
    //target should be the x on the todo
    console.log(target, "this is the target in removeTodo() fired when clicking todo x")
  target.parentNode.parentNode.remove();
      // console.log(target, "target in continue button statement to check if its still the delete button")

  };

  // const deleteTodo = (e) => {
  //   e.preventDefault();
  //   const target = e.target;
  //   console.log("CONTINUE CLICKED/ DELETETODO FUNCTION");
  //   target.parentNode.remove();
  // };

  const addTodo = (e) => {
    e.preventDefault();

    if (input === "") {
      // <EmptyTaskDialogue />
      setIsEmptyInputOpen(true);

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

        {/* EMPTY INPUT MODAL */}
        {isEmptyInputOpen && (
          <div className="modal" disableBackdrop="true">
            <button onClick={closeModal} className="close-button">
              x
            </button>
            <p className="emptyDialogText">Please enter a task</p>
          </div>
        )}

        {/* DELETE TODO MODAL */}
        {isDeleteTodoOpen && (
          <div className="modal" disableBackdrop="true">
            <button onClick={closeModal} className="close-button">
              x
            </button>
            <p className="emptyDialogText">
              Are you sure you want to delete this todo?
            </p>
            <button className="btn" id="continue-button" onClick={removeTodo}>
              continue
            </button>
            <button className="btn" id="cancel-button" onClick={closeModal}>
              cancel
            </button>
          </div>
        )}

        <button type="submit" className="push" onClick={addTodo}>
          Add
        </button>
      </form>

      <ul id="myUL">
        <TodoList setIsDeleteTodoOpen={setIsDeleteTodoOpen} todos={todos} openModal={openModal} isDeleteTodoOpen={isDeleteTodoOpen} removeTodo={removeTodo}/>
      </ul>
      {isDeleteTodoOpen && <DeleteTodo openModal={openModal} isDeleteTodoOpen={isDeleteTodoOpen} removeTodo={removeTodo} closeModal={closeModal} />}
    </div>
  );
}

export default TodoForm;
