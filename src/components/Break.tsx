import { Button } from "./Button";
import { MouseEventHandler } from "react";

export const Break = ({
  timeInMins,
  increment,
  decrement,
}: {
  timeInMins: number;
  increment: MouseEventHandler<HTMLButtonElement>;
  decrement: MouseEventHandler<HTMLButtonElement>;
}) => {
  const seconds = Math.floor((timeInMins * 60) % 60);

  const formattedMin = String(timeInMins).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");

  const typeStyle = "text-2xl font-semibold text-center";

  return (
    <div id="break-label">
      <h3 className={typeStyle}>Break Length</h3>
      <p id="break-length" className={typeStyle}>
        {`${formattedMin}:${formattedSec}`}
      </p>
      <div className="flex gap-3 items-center justify-center mt-3">
        <Button id="break-increment" label="+" onClick={increment} />
        <Button id="break-decrement" label="-" onClick={decrement} />
      </div>
    </div>
  );
};
