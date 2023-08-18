export const Timer = () => {
  return (
    <div className="flex flex-col items-center">
      <div id="timer-label" className="text-2xl font-medium text-center">
        Session
      </div>

      <div id="time-left" className="text-7xl font-bold text-center">
        25:00
      </div>

      <div className="flex items-center justify-center gap-3">
        <button id="start_stop">Pause/Play</button>
        <button id="reset">Reset</button>
      </div>
    </div>
  );
};
