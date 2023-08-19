import { useClock } from "../contexts/ClockConext";
import { Button } from "./Button";

export const Break = () => {
  const { breakLength, dispatch, isRunning } = useClock();
  const typeStyle = "text-2xl font-semibold text-center";

  return (
    <div id="break-label">
      <h3 className={typeStyle}>Break Length</h3>
      <p id="break-length" className="text-3xl font-bold text-center">
        {breakLength}
      </p>
      <div className="flex gap-3 items-center justify-center mt-3">
        <Button
          id="break-increment"
          label="+"
          onClick={() => dispatch({ type: "incrementBreak" })}
          disabled={isRunning}
        />
        <Button
          id="break-decrement"
          label="-"
          onClick={() => dispatch({ type: "decrementBreak" })}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};
