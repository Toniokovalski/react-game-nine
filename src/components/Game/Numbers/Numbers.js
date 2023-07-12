import React from "react";

function Numbers({selectedNumbers, selectNumberFunc, usedNumbers}) {
  const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="numbers-wrap">
      {numbersList.map((number, i) =>
        <span
          key={i}
          className={`number ${usedNumbers.indexOf(number) >= 0 ? 'used' : ''} ${selectedNumbers.indexOf(number) >= 0 ? 'selected' : ''}`}
          onClick={() => selectNumberFunc(number)}
          data-testid={`number-for-test-${i}`}
        >
            {number}
          </span>
      )}
    </div>
  );
}

export default Numbers;