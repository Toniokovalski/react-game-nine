import React from "react";

function Buttons({
                   answerIsCorrect,
                   acceptAnswerFunc,
                   selectedNumbers,
                   redrawFunc,
                   redraws,
                   reloadGameFunc,
                   clearCheckedNumbersFunc
}) {
  let button;
  switch(answerIsCorrect) {
    case true:
      button =
        <button className="btn btn-success mx-2" onClick={acceptAnswerFunc} disabled={selectedNumbers.length === 0}>
          <i className="bi bi-check"></i>
        </button>;
      break;
    case false:
      button =
        <button className="btn btn-danger mx-2" disabled={selectedNumbers.length === 0} onClick={clearCheckedNumbersFunc}>
          <i className="bi bi-x"></i>
        </button>;
      break;
    default:
      // never be called
      break;
  }

  return (
    <div>
      {button}
      <button className="btn btn-warning mx-2" onClick={redrawFunc} disabled={redraws === 0}>
        <i className="bi bi-arrow-clockwise"></i> {redraws}
      </button>
      <button className="btn mx-2 border-primary" onClick={reloadGameFunc}>
        <i className="bi bi-controller me-2"></i>
        Start new game!
      </button>
    </div>
  );
}

export default Buttons;