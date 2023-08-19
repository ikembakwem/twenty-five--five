import { Button } from "./Button";
import { useClock } from "../contexts/ClockConext";

export const Timer = () => {
  const { timer, isRunning, dispatch, mode } = useClock();
  const seconds = Math.floor(timer % 60);

  const formattedMin = String(Math.floor(timer / 60)).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");
  return (
    <div className="flex flex-col items-center border-2 border-zinc-400 rounded-2xl py-6 px-8">
      <div
        id="timer-label"
        className="text-2xl font-semibold text-center leading-none capitalize"
      >
        {mode}
      </div>

      <div id="time-left" className="text-7xl font-bold text-center">
        {`${formattedMin}:${formattedSec}`}
      </div>

      <div className="flex items-center justify-center gap-4 mt-3">
        <Button
          id="start_stop"
          label={isRunning ? "Pause" : "Play"}
          size="md"
          onClick={() => dispatch({ type: "playPause" })}
        />
        <Button
          id="reset"
          label="Reset"
          size="md"
          onClick={() => dispatch({ type: "reset" })}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};
