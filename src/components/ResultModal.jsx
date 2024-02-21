import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal({
  result,
  targetTime,
  ref,
}) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>{result ? "You won." : "You lost!"}</h2>
      <p>The target time was: {targetTime} seconds.</p>
      <p>
        You stopped the timer with <strong>- seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
