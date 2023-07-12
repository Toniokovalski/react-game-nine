import React from "react";

function DoneFrame({doneStatus, resetGame}) {
  return (
    <div className="text-center">
      <h2>{doneStatus}</h2>

      <button className="btn btn-secondary" onClick={resetGame}>Play Again</button>
    </div>
  );
}

export default DoneFrame;