import React from "react";

function ResetGameBtn({reloadGameFunc,}) {
  return (
    <button className="btn border-primary" onClick={reloadGameFunc} data-testid={"reset-button"}>
      <i className="bi bi-controller me-2"></i>
      Start new game!
    </button>
  );
}

export default ResetGameBtn;