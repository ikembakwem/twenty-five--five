import { Button } from "./Button";
import { MouseEventHandler } from "react";

export const Break = ({
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
    <div id="break-label">
      <h3 className={typeStyle}>Break Length</h3>
      <p id="break-length" className="text-3xl font-bold text-center">
        {Math.floor(timeInSec / 60)}
      </p>
      <div className="flex gap-3 items-center justify-center mt-3">
        <Button
          id="break-increment"
          label="+"
          onClick={increment}
          disabled={isRunning}
        />
        <Button
          id="break-decrement"
          label="-"
          onClick={decrement}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};
