import differenceInSeconds from 'date-fns/differenceInSeconds';
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
} from '../reducers/cycles/actions';
import { Cycle, CyclesReducer } from '../reducers/cycles/reducer';

interface createCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextData {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  ammountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: createCycleData) => void;
  interruptCurrentCycle: () => void;
}

interface CyclesProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextData);

export function CyclesProvider({ children }: CyclesProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    },
  );

  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [ammountSecondsPassed, setAmmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });

  useEffect(() => {
    const stateJson = JSON.stringify(cyclesState);

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJson);
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmmountSecondsPassed(seconds);
  }

  function createNewCycle(data: createCycleData) {
    const id = new Date().getTime().toString();

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    setAmmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinished());
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        ammountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
