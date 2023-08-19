import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface ClockState {
  timer: number;
  sessionLength: number;
  breakLength: number;
  isRunning: boolean;
  mode: string;
}

interface ClockContextState extends ClockState {
  dispatch: Dispatch<Action>;
}

type Props = {
  children: ReactNode;
};

const initialClockState: ClockState = {
  sessionLength: 25,
  timer: 25 * 60,
  breakLength: 5,
  isRunning: false,
  mode: "session",
};

const ClockContext = createContext<ClockContextState>({
  ...initialClockState,
  dispatch: () => {},
});

type Action =
  | { type: "icrementSession" }
  | { type: "decrementSession" }
  | { type: "incrementBreak" }
  | { type: "decrementBreak" }
  | { type: "playPause" }
  | { type: "reset" }
  | { type: "countdown" }
  | { type: "switchToBreakMode" };

const reducer = (state: ClockState, action: Action) => {
  switch (action.type) {
    case "icrementSession": {
      if (state.sessionLength < 60) {
        return {
          ...state,
          sessionLength: state.sessionLength + 1,
          timer: (state.sessionLength + 1) * 60,
        };
      }
      return state;
    }
    case "decrementSession": {
      if (state.sessionLength > 1) {
        return {
          ...state,
          sessionLength: state.sessionLength - 1,
          timer: (state.sessionLength - 1) * 60,
        };
      }
      return state;
    }
    case "incrementBreak": {
      if (state.breakLength < 60) {
        return { ...state, breakLength: state.breakLength + 1 };
      }
      return state;
    }
    case "decrementBreak": {
      if (state.breakLength > 1) {
        return { ...state, breakLength: state.breakLength - 1 };
      }
      return state;
    }
    case "playPause": {
      return { ...state, isRunning: !state.isRunning };
    }
    case "reset": {
      return initialClockState;
    }
    case "countdown": {
      return { ...state, timer: state.timer - 1 };
    }
    case "switchToBreakMode": {
      return { ...state, mode: "break", timer: state.breakLength * 60 };
    }
  }
};

export const ClockProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialClockState);
  return (
    <ClockContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ClockContext.Provider>
  );
};

export const useClock = () => useContext(ClockContext);
