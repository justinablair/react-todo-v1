import React from 'react'

function continueDialog({openModel, isOpen}) {
    // alert("test")
  return (
    <div>
       {isOpen && (
          <div className="modal"  disableBackdrop="true" >
            <button onClick={openModel} className="close-button">
              x
            </button>
            <p className="emptyDialogText">r u sure u want to delete</p>
            <button>yes</button>
            <button>no</button>
          </div>
        )}
    </div>
  )
}

export default continueDialog
