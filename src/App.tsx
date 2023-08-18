import { useState } from "react";
import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { Timer } from "./components/Timer";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timer, setTimer] = useState(sessionTime);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto mt-16 p-12 border-2 border-gray-600 rounded-2xl">
        <div className="flex justify-between self-stretch">
          <Break timeInMins={breakTime} />
          <Session timeInMins={sessionTime} />
        </div>
        <Timer timeInMins={timer} />
      </div>
    </div>
  );
}

export default App;
