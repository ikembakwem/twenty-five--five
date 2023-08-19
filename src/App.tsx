import { useEffect } from "react";
import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { Timer } from "./components/Timer";
import { useClock } from "./contexts/ClockConext";

function App() {
  const { isRunning, mode, timer, dispatch } = useClock();

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        if (timer > 0) {
          dispatch({ type: "countdown" });
        }
        if (timer === 0) {
          mode === "session"
            ? dispatch({ type: "switchToBreakMode" })
            : dispatch({ type: "switchToSessionMode" });
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, timer, mode]);

  return (
    <div>
      <h1 className="text-5xl text-center text-gray-800 mt-8 font-bold leading-tight tracking-tight">
        25 + 5 Clock
      </h1>
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto mt-6 p-6 border-2 border-gray-600 rounded-2xl">
        <div className="flex justify-between self-stretch py-3">
          <Break />
          <Session />
        </div>
        <Timer />
      </div>
      <div className="flex justify-center items-baseline py-4 text-gray-600 text-lg">
        <p>Designed and coded by</p>
        <a
          target="_blank"
          href="https://ikembakwem.vercel.app/"
          className="font-semibold pl-2 text-blue-800"
        >
          Ikechukwu Mbakwem
        </a>
      </div>
    </div>
  );
}

export default App;
