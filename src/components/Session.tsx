import { Button } from "./Button";

export const Session = ({ timeInMins }: { timeInMins: number }) => {
  const seconds = Math.floor((timeInMins * 60) % 60);

  const formattedMin = String(timeInMins).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");

  const typeStyle = "text-2xl font-semibold text-center";

  return (
    <div id="session-label">
      <h3 className={typeStyle}>Session Length</h3>
      <p id="session-length" className={typeStyle}>
        {`${formattedMin}:${formattedSec}`}
      </p>
      <div className="flex gap-3 items-center justify-center mt-3">
        <Button id="session-increment" label="+" />
        <Button id="session-decrement" label="-" />
      </div>
    </div>
  );
};
