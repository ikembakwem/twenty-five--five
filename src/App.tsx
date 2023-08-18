import { useEffect, useState } from "react";
import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { Timer } from "./components/Timer";

function App() {
  const [breakTime, setBreakTime] = useState(300);
  const [sessionTime, setSessionTime] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"session" | "break">("session");

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        if (sessionTime > 0) {
          setSessionTime(sessionTime - 1);
        }
        if (sessionTime === 0) {
          setMode("break");
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [sessionTime, isRunning]);

  useEffect(() => {
    let breakInterval: number | undefined;
    if (isRunning) {
      breakInterval = setInterval(() => {
        if (breakTime > 0 && sessionTime < 1) {
          setBreakTime(breakTime - 1);
        }
        if (breakTime === 0) {
          resetHandler();
        }
      }, 1000);
    }
    return () => {
      clearInterval(breakInterval);
    };
  }, [breakTime, isRunning, mode]);

  const sessionIncrementHandler = () => {
    if (Math.floor(sessionTime / 60) < 59) {
      setSessionTime(sessionTime + 60);
    }
  };
  const sessionDecrementHandler = () => {
    if (Math.floor(sessionTime / 60) > 1) {
      setSessionTime(sessionTime - 60);
    }
  };

  const breakIncrementHandler = () => {
    if (Math.floor(breakTime / 60) < 59) {
      setBreakTime(breakTime + 60);
    }
  };
  const breakDecrementHandler = () => {
    if (Math.floor(breakTime / 60) > 1) {
      setBreakTime(breakTime - 60);
    }
  };

  const resetHandler = () => {
    setIsRunning(false);
    setMode("session");
    setSessionTime(1500);
    setBreakTime(300);
  };

  const playPauseHandler = () => {
    setIsRunning(!isRunning);
  };

  console.log(
    "Is running",
    isRunning,
    "Break time",
    breakTime,
    "Session time",
    sessionTime
  );

  return (
    <div>
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto mt-16 p-12 border-2 border-gray-600 rounded-2xl">
        <div className="flex justify-between self-stretch py-3">
          <Break
            timeInSec={breakTime}
            increment={breakIncrementHandler}
            decrement={breakDecrementHandler}
            isRunning={isRunning}
          />
          <Session
            timeInSec={sessionTime}
            increment={sessionIncrementHandler}
            decrement={sessionDecrementHandler}
            isRunning={isRunning}
          />
        </div>
        <Timer
          timeInSec={mode === "session" ? sessionTime : breakTime}
          reset={resetHandler}
          playPause={playPauseHandler}
          isRunning={isRunning}
          mode={mode}
        />
      </div>
    </div>
  );
}

export default App;
