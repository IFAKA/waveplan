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
  const isLastExercise = currentExerciseIndex === exercises.length - 1;
  const isFirstExercise = currentExerciseIndex === 0;

  const placeholderHeight = "h-4"; // Example height, adjust if needed

  return (
    <ul className="flex flex-col relative space-y-2 flex-grow p-4">
      <AnimatePresence>
        {/* Placeholder for the previous exercise */}
        {isFirstExercise ? (
          <motion.li
            key="placeholder-prev"
            className={`px-3 py-1 bg-gradient-to-t from-white dark:from-slate-700 rounded-md ${placeholderHeight}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          />
        ) : (
          <motion.li
            key={`prev-${currentExerciseIndex - 1}`}
            className="px-4 py-3 bg-gray-100 dark:bg-slate-700 rounded-md text-gray-300 dark:text-gray-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ delay: 0.1 }}
          >
            <div className="font-bold">
              {exercises[currentExerciseIndex - 1].name}
            </div>
          </motion.li>
        )}

        {/* Current exercise card */}
        <ExerciseCard
          exercise={exercises[currentExerciseIndex]}
          index={currentExerciseIndex}
        />

        {/* Placeholder for the next exercise */}
        {isLastExercise ? (
          <motion.li
            key="placeholder-next"
            className={`px-3 py-1 bg-gradient-to-b from-white dark:from-slate-700 rounded-md ${placeholderHeight}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          />
        ) : (
          <motion.li
            key={`next-${currentExerciseIndex + 1}`}
            className="px-4 py-3 bg-gray-100 dark:bg-slate-700 rounded-t-md text-gray-400 dark:text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between">
              <div className="font-bold">
                {exercises[currentExerciseIndex + 1].name}
              </div>
              <div className="flex gap-2">
                {"sets" in exercises[currentExerciseIndex + 1] && (
                  <span>
                    {
                      (
                        exercises[currentExerciseIndex + 1] as Exercise & {
                          sets: number;
                        }
                      ).sets
                    }{" "}
                    sets
                  </span>
                )}
                {"reps" in exercises[currentExerciseIndex + 1] && (
                  <span>
                    {
                      (
                        exercises[currentExerciseIndex + 1] as Exercise & {
                          reps: number;
                        }
                      ).reps
                    }{" "}
                    reps
                  </span>
                )}
              </div>
            </div>
          </motion.li>
        )}
      </AnimatePresence>
    </ul>
  );
};

export default ExerciseList;
