import { MouseEventHandler } from "react";
import { Button } from "./Button";
import { useClock } from "../contexts/ClockConext";

export const Session = () => {
  const { sessionLength, dispatch, isRunning } = useClock();
  const typeStyle = "text-2xl font-semibold text-center";

  return (
    <div id="session-label">
      <h3 className={typeStyle}>Session Length</h3>
      <p id="session-length" className="text-3xl font-bold text-center">
        {sessionLength}
      </p>
      <div className="flex gap-3 items-center justify-center mt-3">
        <Button
          id="session-increment"
          label="+"
          onClick={() => dispatch({ type: "icrementSession" })}
          disabled={isRunning}
        />
        <Button
          id="session-decrement"
          label="-"
          onClick={() => dispatch({ type: "decrementSession" })}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};
