// /components/Rest.tsx

import { FC, useState } from "react";
import { useTimer } from "../hooks/useTimer"; // Assuming this hook exists
import { FITNESS_REST_TIME } from "../constants";
import Particles from "./Particles";
import GregorianChantsAudio from "./GregorianChantsAudio";

interface RestProps {
  currentExerciseIndex: number;
  weight: number;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
}

const Rest: FC<RestProps> = ({ currentExerciseIndex, weight, setWeight }) => {
  const [restTime, setRestTime] = useState<number>(FITNESS_REST_TIME);
  const { timerTime, timerStarted, startRest } = useTimer(restTime, () => {
    console.log("Rest time completed for exercise " + currentExerciseIndex);
  });

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Particles Background */}
      <Particles />

      {/* Gregorian Chants Audio */}
      <GregorianChantsAudio />

      {/* Rest Timer */}
      <div className="z-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Rest Time</h2>
        <p className="text-xl mb-2">{timerTime}s remaining</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={startRest}
          disabled={timerStarted}
        >
          Start Rest
        </button>
      </div>
    </div>
  );
};

export default Rest;
