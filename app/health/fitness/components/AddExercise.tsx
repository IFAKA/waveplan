"use client";

import { FC, useState } from "react";
import { Exercise } from "../types";

interface AddExerciseProps {
  addExercise: (exercise: Exercise) => void;
}

const AddExercise: FC<AddExerciseProps> = ({ addExercise }) => {
  const [name, setName] = useState<string>("");
  const [sets, setSets] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);

  const handleSubmit = () => {
    if (name && sets > 0 && reps > 0) {
      addExercise({ name, sets, reps, weightHistory: [] });
      setName("");
      setSets(0);
      setReps(0);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Add New Exercise</h3>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Exercise Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Exercise
        </button>
      </div>
    </div>
  );
};

export default AddExercise;
