import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref,
) {
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const userLost = remainingTime <= 0;
  const userScore = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>"You lost."</h2>}
      {!userLost && <h2>Score: {userScore}</h2>}
      <p>The target time was: {targetTime} seconds.</p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
});

export default ResultModal;
