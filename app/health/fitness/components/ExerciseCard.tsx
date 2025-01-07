import { motion } from "motion/react";
import { FC } from "react";
import { Exercise } from "../types";
import { isStrengthExercise, isCardioExercise } from "../utils/routineUtils";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

const ExerciseCard: FC<ExerciseCardProps> = ({ exercise, index }) => {
  if (!exercise) return null;
  return (
    <>
      {isStrengthExercise(exercise) && (
        <motion.li
          key={`strength-${index}`}
          className="px-4 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg flex-grow flex flex-col gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex justify-between">
            <div className="font-bold">{exercise.name}</div>
            <div className="flex gap-2 font-bold">
              <span>{exercise.sets} sets</span>
              <span>{exercise.reps} reps</span>
            </div>
          </div>
          <div>
            <span>Progress: </span>
            {exercise.lastWeights.length > 0 ? (
              exercise.lastWeights.join(", ") + " kg"
            ) : (
              <span className="italic text-gray-500">
                No weights recorded yet
              </span>
            )}
          </div>

          {/* <WeightHistoryChart weightHistory={exercise.weightHistory} /> */}
        </motion.li>
      )}
      {isCardioExercise(exercise) && (
        <motion.li
          key={`cardio-${index}`}
          className="px-4 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg flex-grow flex flex-col gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex justify-between">
            <div className="font-bold">{exercise.name}</div>
            <div className="flex gap-2 font-bold">
              <span>{exercise.intervals} intervals</span>
              <span>{exercise.trainingTime} trainingTime</span>
            </div>
          </div>
          <div>
            <span>Progress: </span>
            {exercise.progress.length > 0 ? (
              exercise.progress.map((entry, i) => (
                <span key={i} className="text-gray-600 dark:text-gray-400">
                  {/* {entry.weight} kg on {entry.date}
              {i < exercise.weightHistory.length - 1 && ", "} */}
                </span>
              ))
            ) : (
              <span className="italic text-gray-500">
                No weights recorded yet
              </span>
            )}
          </div>

          {/* <WeightHistoryChart weightHistory={exercise.weightHistory} /> */}
        </motion.li>
      )}
    </>
  );
};

export default ExerciseCard;
