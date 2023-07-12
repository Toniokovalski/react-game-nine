import React from "react";

function Stars({randomNumberOfStars}) {
  return (
    <ul className="list-inline stars-wrap">
      <span className="stars-amount">({randomNumberOfStars})</span>
      {Array(randomNumberOfStars).fill().map((_, i) => {
        return (
          <li className="list-inline-item star" key={i}>
            <i className="bi bi-star-fill"></i>
          </li>
        )
      })}
    </ul>
  );
}

export default Stars;