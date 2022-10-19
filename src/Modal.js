import React from 'react'
import ReactDom from "react-dom";
import {useRef} from "react";

export default function Modal({ isCorrect, solution, turn, setShowModal}) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className="modal" ref={modalRef} onClick={closeModal}>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses!</p>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Oopsies Poopsies!</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time.</p>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
      )}
    </div>,
    document.getElementById("portal")
  )
}
