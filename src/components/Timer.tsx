import { MouseEventHandler } from "react";
import { Button } from "./Button";

export const Timer = ({
  timeInMins,
  reset,
  playPause,
}: {
  timeInMins: number;
  reset: MouseEventHandler<HTMLButtonElement>;
  playPause: MouseEventHandler<HTMLButtonElement>;
}) => {
  const seconds = Math.floor((timeInMins * 60) % 60);

  const formattedMin = String(timeInMins).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div
        id="timer-label"
        className="text-2xl font-semibold text-center leading-none"
      >
        Session
      </div>

      <div id="time-left" className="text-7xl font-bold text-center">
        {`${formattedMin}:${formattedSec}`}
      </div>

      <div className="flex items-center justify-center gap-4 mt-3">
        <Button
          id="start_stop"
          label="Pause/Play"
          size="md"
          onClick={playPause}
        />
        <Button id="reset" label="Reset" size="md" onClick={reset} />
      </div>
    </div>
  );
};
