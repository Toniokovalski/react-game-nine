import React from "react";

function RedrawBtn({redrawFunc, redraws, disabled}) {
  return (
    <button
      className="btn btn-warning"
      onClick={redrawFunc}
      disabled={redraws === 0 || disabled}
    >
      <i className="bi bi-arrow-clockwise"></i> {redraws}
    </button>
  );
}

export default RedrawBtn;