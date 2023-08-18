import { useState } from "react";
import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { Timer } from "./components/Timer";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timer, setTimer] = useState(sessionTime);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"session" | "break">("session");

  const sessionIncrementHandler = () => {
    if (sessionTime < 59) {
      setSessionTime(sessionTime + 1);
    }
  };
  const sessionDecrementHandler = () => {
    if (sessionTime > 2) {
      setSessionTime(sessionTime - 1);
    }
  };

  const breakIncrementHandler = () => {
    if (breakTime < 59) {
      setBreakTime(breakTime + 1);
    }
  };
  const breakDecrementHandler = () => {
    if (breakTime > 2) {
      setBreakTime(breakTime - 1);
    }
  };

  const resetHandler = () => {
    setIsRunning(false);
    setBreakTime(5);
    setSessionTime(25);
  };

  const playPauseHandler = () => {
    // Code for pause play
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto mt-16 p-12 border-2 border-gray-600 rounded-2xl">
        <div className="flex justify-between self-stretch">
          <Break
            timeInMins={breakTime}
            increment={breakIncrementHandler}
            decrement={breakDecrementHandler}
          />
          <Session
            timeInMins={sessionTime}
            increment={sessionIncrementHandler}
            decrement={sessionDecrementHandler}
          />
        </div>
        <Timer
          timeInMins={mode === "session" ? sessionTime : breakTime}
          reset={resetHandler}
          playPause={playPauseHandler}
        />
      </div>
    </div>
  );
}

export default App;
