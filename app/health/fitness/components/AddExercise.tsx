"use client";

import { FC, useState } from "react";
import { motion } from "motion/react";

interface AddExerciseProps {
  addExercise: (exercise: { name: string; sets: number; reps: number }) => void;
}

const AddExercise: FC<AddExerciseProps> = ({ addExercise }) => {
  const [name, setName] = useState<string>("");
  const [sets, setSets] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);

  const handleSubmit = () => {
    if (name && sets > 0 && reps > 0) {
      addExercise({ name, sets, reps });
      setName("");
      setSets(0);
      setReps(0);
    }
  };

  return (
    <motion.div
      className="w-full space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.25 }}
    >
      <h4 className="font-semibold text-gray-800 dark:text-white">
        Add New Exercise
      </h4>
      <div className="flex space-x-4">
        {/* Input Fields */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Exercise Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
          />
          <input
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
          />
          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
          />
        </div>
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-fit px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </motion.div>
  );
};

export default AddExercise;
