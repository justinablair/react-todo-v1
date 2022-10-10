import React, {useState} from 'react'

function EmptyTaskDialogue() {


   const [open, setOpen] = useState(false);
    
    const handleClickToOpen = () => {
      setOpen(true);
    };
    
    const handleToClose = () => {
      setOpen(false);
    };
  return (
    <div>






      <dialog id="empty-task-dialog" >
    <h2 id="empty-task-message">Please enter a task!</h2>
    <button className="exit-button" id="empty-exit" onClick={handleToClose}>x</button> 
</dialog>
    </div>
  )
}

export default EmptyTaskDialogue
