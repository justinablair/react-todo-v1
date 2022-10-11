import React from "react";

function DeleteTodo({openModal, isDeleteTodoOpen,, closeModal}) {

  return (
    <div>

{isDeleteTodoOpen && (
          <div className="modal"  disableBackdrop="true" >
            <button onClick={openModal} className="close-button">
              x
            </button>
            <p className="emptyDialogText">Are you sure you want to delete this todo</p>
            <button id="continue-button" onClick={removeTodo}>continue</button>
            <button id="cancel-button" onClick={closeModal}>cancel</button>
          </div>
        )}
    </div>

    
  );
}

export default DeleteTodo;

// button() {
//     const deleteButton = document.createElement("button"); //create new button element
//     const container = document.createElement("div");
//     container.appendChild(deleteButton);
//     deleteButton.setAttribute("class", "btn"); //set button class to be btn
//     deleteButton.appendChild(document.createTextNode("x")); //set button text to say delete
//    this.ulDisplay.addEventListener("click", (e) => {
//       const target = e.target;
//       if (target.className === "btn") {
//         target.parentNode.parentNode.remove();
//       }
//     });
//     return container;
//   }
