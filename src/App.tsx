import { useEffect, useState } from "react";
import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { Timer } from "./components/Timer";
import { useClock } from "./contexts/ClockConext";

function App() {
  const { isRunning, sessionLength, timer, dispatch } = useClock();

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        if (sessionLength > 0) {
          dispatch({ type: "countdown" });
        }
        if (timer === 0) {
          dispatch({ type: "switchToBreakMode" });
          if (timer === 0) {
            dispatch({ type: "reset" });
          }
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [sessionLength, isRunning, timer]);

  return (
    <div>
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto mt-16 p-12 border-2 border-gray-600 rounded-2xl">
        <div className="flex justify-between self-stretch py-3">
          <Break />
          <Session />
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default App;
