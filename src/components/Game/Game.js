import React, {useState, useEffect} from "react";
import Stars from './Stars/Stars';
import AnswerBtn from './Buttons/AnswerBtn';
import ResetGameBtn from "./Buttons/ResetGameBtn";
import RedrawBtn from "./Buttons/RedrawBtn";
import Numbers from './Numbers/Numbers';
import Answer from './Answer/Answer';
import DoneFrame from './DoneFrame/DoneFrame';
import '../../Styles/Styles.css'

function Game() {
  const [randomNumberOfStars, setRandomNumberOfStars] = useState(1 + Math.floor(Math.random()*9))
  const [selectedNumbers, setSelectedNumbers] = useState([])
  const [usedNumbers, setUsedNumbers] = useState([])
  const [redraws, setRedraws] = useState(9)
  const [answerIsCorrect, setAnswerIsCorrect] = useState(null)
  const [doneStatus, setDoneStatus] = useState(null)

  useEffect(() => {
    if (usedNumbers.length === 9) { setDoneStatus('Done. Nice!') }
    if (redraws === 0 && !possibleSolutions(usedNumbers)) { setDoneStatus('Game Over!') }

    const answerStatus = randomNumberOfStars === selectedNumbers.reduce((acc, n) => acc + n, 0)
    setAnswerIsCorrect(answerStatus)
  }, [selectedNumbers])

  const possibleCombinationSum = (arr, n) => {
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return possibleCombinationSum(arr, n);
    }
    const listSize = arr.length, combinationsCount = (1 << listSize)
    for (let i = 1; i < combinationsCount ; i++ ) {
      let combinationSum = 0;
      for (let j=0 ; j < listSize ; j++) {
        if (i & (1 << j)) { combinationSum += arr[j]; }
      }
      if (n === combinationSum) { return true; }
    }
    return false;
  }

  const possibleSolutions = (array) => {
    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number =>
      array.indexOf(number) === -1
    );
    return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  }

  const selectNumberFunc = (clickedNumber) => {
    if (selectedNumbers.indexOf(clickedNumber) >= 0) { return }
    const newSelectedNumbers = selectedNumbers.concat(clickedNumber)
    setAnswerIsCorrect(null);
    setSelectedNumbers(newSelectedNumbers);
  }

  const unselectNumberFunc = (clickedNumber) => {
    setAnswerIsCorrect(null);
    const newSelectedNumbers = selectedNumbers.filter(number => number !== clickedNumber);
    setSelectedNumbers(newSelectedNumbers);
  };

  const resetStatesAfterAcceptOrRedraw = () => {
    setSelectedNumbers([])
    setAnswerIsCorrect(null);
    setRandomNumberOfStars(1 + Math.floor(Math.random()*9));
  }

  const acceptAnswerFunc = () => {
    setUsedNumbers(usedNumbers.concat(selectedNumbers))
    resetStatesAfterAcceptOrRedraw()
  }

  const redrawFunc = () => {
    if (redraws === 0) { return }
    resetStatesAfterAcceptOrRedraw()
    setRedraws(redraws - 1);
  }

  const clearCheckedNumbersFunc = () => {
    setSelectedNumbers([]);
  }

  const resetGame = () => {
    setSelectedNumbers([]);
    setRandomNumberOfStars(1 + Math.floor(Math.random()*9));
    setUsedNumbers([]);
    setAnswerIsCorrect(null);
    setRedraws(5);
    setDoneStatus(null);
  }

  return (
    <div className="game container">
      <h1 className="text-center my-0">Game Nine</h1>

      <Stars randomNumberOfStars={randomNumberOfStars} />

      <div className="buttons-wrap">
        <AnswerBtn
          selectedNumbers={selectedNumbers}
          answerIsCorrect={answerIsCorrect}
          acceptAnswerFunc={acceptAnswerFunc}
          clearCheckedNumbersFunc={clearCheckedNumbersFunc}
        />
        <RedrawBtn redrawFunc={redrawFunc} redraws={redraws} disabled={doneStatus} />
        <ResetGameBtn reloadGameFunc={resetGame} />
      </div>

      {doneStatus ?
        <DoneFrame resetGame={resetGame} doneStatus={doneStatus} /> :
        <Numbers selectedNumbers={selectedNumbers} selectNumberFunc={selectNumberFunc} usedNumbers={usedNumbers} />
      }

      <Answer selectedNumbers={selectedNumbers} unselectNumber={unselectNumberFunc} />
    </div>
  );
}

export default Game;