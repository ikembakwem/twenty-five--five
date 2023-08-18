import { Break } from "./components/Break";
import { Session } from "./components/Session";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center gap-6 max-w-xl mx-auto mt-16 p-12 border-2 border-gray-600 rounded-2xl">
        <div className="flex justify-between self-stretch">
          <Break timeInMins={9} />
          <Session timeInMins={12} />
        </div>
        <Timer timeInMins={25} />
      </div>
    </div>
  );
}

export default App;
