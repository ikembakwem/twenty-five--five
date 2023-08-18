import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center max-w-xl mx-auto mt-16 p-8 border-2 border-gray-600 rounded-2xl">
        <div className="flex justify-between self-stretch">
          <Break />
          <Session />
        </div>
        <Timer />
      </div>
    </div>
  );
}

export default App;
