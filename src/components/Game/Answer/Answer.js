import React from "react";

function Answer({selectedNumbers, unselectNumber}) {
  return (
    <div className="selected-number-wrap" data-testid={"answer-container"}>
      {selectedNumbers.map((number, i) =>
        <span className="selected-number" key={i} onClick={() => unselectNumber(number)}>
          {number}
        </span>
      )}
    </div>
  );
}

export default Answer;