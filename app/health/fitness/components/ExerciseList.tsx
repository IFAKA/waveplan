"use client";

import { FC } from "react";
import { Exercise } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import ExerciseCard from "./ExerciseCard";

interface ExerciseListProps {
  exercises: Exercise[];
  currentExerciseIndex: number;
}

const ExerciseList: FC<ExerciseListProps> = ({
  exercises,
  currentExerciseIndex,
}) => {
  // Ensure the index calculations are correct
  const isLastExercise = currentExerciseIndex === exercises.length - 1;
  const isFirstExercise = currentExerciseIndex === 0;

  const placeholderHeight = "h-4"; // Example height, adjust if needed

  return (
    <ul className="flex-1 flex flex-col relative space-y-2 px-4">
      <AnimatePresence>
        {/* Show placeholder for previous exercise if there isn't one */}
        {isFirstExercise ? (
          <motion.li
            key="placeholder-prev"
            className={`px-3 py-1 bg-gradient-to-t from-white dark:from-slate-700 rounded-md ${placeholderHeight}`}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
          >
            {/* Placeholder for previous exercise */}
          </motion.li>
        ) : (
          <motion.li
            key={`prev-${currentExerciseIndex - 1}`}
            className="px-4 p-3 bg-gray-100 dark:bg-slate-700 rounded-md text-gray-300 dark:text-gray-500"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
          >
            <div className="font-bold">
              {exercises[currentExerciseIndex - 1].name}
            </div>
          </motion.li>
        )}

        {/* Current exercise */}
        <ExerciseCard
          exercise={exercises[currentExerciseIndex]}
          index={currentExerciseIndex}
        />

        {/* Show placeholder for next exercise if there isn't one */}
        {isLastExercise ? (
          <motion.li
            key="placeholder-next"
            className={`px-3 py-1 bg-gradient-to-b from-white dark:from-slate-700 rounded-md ${placeholderHeight}`}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ delay: 0.25 }}
          >
            {/* Placeholder for next exercise */}
          </motion.li>
        ) : (
          <motion.li
            key={`next-${currentExerciseIndex + 1}`}
            className="px-4 p-3 bg-gray-100 dark:bg-slate-700 rounded-t-md text-gray-400 dark:text-gray-500"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ delay: 0.25 }}
          >
            <div className="flex justify-between">
              <div className="font-bold">
                {exercises[currentExerciseIndex + 1].name}
              </div>
              <div className="flex gap-2">
                <span>{exercises[currentExerciseIndex + 1].sets} sets</span>
                <span>{exercises[currentExerciseIndex + 1].reps} reps</span>
              </div>
            </div>
          </motion.li>
        )}
      </AnimatePresence>
    </ul>
  );
};

export default ExerciseList;
