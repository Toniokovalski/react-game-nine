import React from "react";

function AnswerBtn({answerIsCorrect, acceptAnswerFunc, selectedNumbers, clearCheckedNumbersFunc}) {

  const checkAnswerCondition= (answerIsCorrect) => {
    if (answerIsCorrect) {
      return (
        <button className="btn btn-success mx-2" onClick={acceptAnswerFunc} disabled={selectedNumbers.length === 0}>
          <i className="bi bi-check"></i>
        </button>
      )
    } else {
      return (
        <button className="btn btn-danger" disabled={selectedNumbers.length === 0} onClick={clearCheckedNumbersFunc}>
          <i className="bi bi-x"></i>
        </button>
      )
    }
  }

  return (
    checkAnswerCondition(answerIsCorrect)
  );
}

export default AnswerBtn;