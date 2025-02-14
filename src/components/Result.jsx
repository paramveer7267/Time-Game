import React from "react";
import {createPortal} from 'react-dom'
const Result = ({ targetTime, ref, remainT, onReset }) => {
  const userL = remainT <= 0;
  const score = Math.round((1 - remainT / (targetTime * 1000)) * 100);
  return createPortal(
    <dialog ref={ref} className="result-modal">
      {userL && <h2>You Lost</h2>}
      {!userL && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{(remainT / 1000).toFixed(2)} seconds left.</strong>{" "}
      </p>
      <form action="" method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
    , document.getElementById('modal')
  );
};

export default Result;
