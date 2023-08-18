import { MouseEventHandler } from "react";
import { Button } from "./Button";

export const Session = ({
  timeInSec,
  increment,
  decrement,
  isRunning,
}: {
  timeInSec: number;
  increment: MouseEventHandler<HTMLButtonElement>;
  decrement: MouseEventHandler<HTMLButtonElement>;
  isRunning: boolean;
}) => {
  const typeStyle = "text-2xl font-semibold text-center";

  return (
    <div id="session-label">
      <h3 className={typeStyle}>Session Length</h3>
      <p id="session-length" className="text-3xl font-bold text-center">
        {Math.floor(timeInSec / 60)}
      </p>
      <div className="flex gap-3 items-center justify-center mt-3">
        <Button
          id="session-increment"
          label="+"
          onClick={increment}
          disabled={isRunning}
        />
        <Button
          id="session-decrement"
          label="-"
          onClick={decrement}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};
