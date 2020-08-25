import React from 'react';

const Modal = ({ handleClose, show, children, count }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
            <h1>Modal is clicked {count} number of time</h1>
          
          <button onClick={handleClose} style={{cursor:"pointer"}}>Close</button>
        </section>
      </div>
    );
  };

export default Modal;


