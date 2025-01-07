import { FC, FormEvent, useEffect, useRef, useState } from "react";
import RestTimeDisplay from "./RestTimeDisplay";
import WeightInput from "./WeightInput"; // Import the new WeightInput component

interface RestTimerProps {
  restTime: number;
  onFinish: (weight: number) => void; // This function no longer needs the weight argument
}

const RestTimer: FC<RestTimerProps> = ({ restTime, onFinish }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [timerTime, setTimerTime] = useState(restTime);
  const [weight, setWeight] = useState(0);
  const timerRef = useRef<number | null>(null);
  const hasFinished = useRef(false); // Flag to prevent multiple calls to onFinish

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (weight > 0) {
      setIsStarted(true);
      startTimer();
    }
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current); // Clear any existing timer
    setTimerTime(restTime);
    hasFinished.current = false; // Reset the finished flag when starting a new timer
    timerRef.current = window.setInterval(() => {
      setTimerTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!);
          timerRef.current = null;
          setIsStarted(false); // Stop the timer
          // Ensure onFinish is called only once
          if (!hasFinished.current) {
            hasFinished.current = true;
            setTimeout(() => onFinish(weight), 0); // Use setTimeout to avoid directly modifying state during render
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current); // Clear the timer
      timerRef.current = null;
      setTimerTime(restTime);
      setIsStarted(false);
      hasFinished.current = false; // Reset the flag on reset
    };
    return () => {
      resetTimer();
    };
  }, [restTime]);

  return (
    <>
      {isStarted && <RestTimeDisplay timerTime={timerTime} />}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <WeightInput
          value={weight}
          onValueChange={setWeight}
          isDisabled={isStarted}
        />
        <button
          type="submit"
          className={`disabled:opacity-50 p-2 rounded bg-blue-500 text-white ${
            weight > 0 ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={weight === 0}
        >
          Set Weight
        </button>
      </form>
    </>
  );
};

export default RestTimer;
