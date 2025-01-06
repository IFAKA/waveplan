import { motion } from "motion/react";
import { FC } from "react";
import { Exercise } from "../types";

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

const ExerciseCard: FC<ExerciseCardProps> = ({ exercise, index }) => {
  return (
    <motion.li
      key={`current-${index}`}
      className="px-4 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-white rounded-lg flex-grow flex flex-col gap-2"
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
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
        {exercise.weightHistory.length > 0 ? (
          exercise.weightHistory.map((entry, i) => (
            <span key={i} className="text-gray-600 dark:text-gray-400">
              {/* {entry.weight} kg on {entry.date}
              {i < exercise.weightHistory.length - 1 && ", "} */}
            </span>
          ))
        ) : (
          <span className="italic text-gray-500">No weights recorded yet</span>
        )}
      </div>

      {/* <WeightHistoryChart weightHistory={exercise.weightHistory} /> */}
    </motion.li>
  );
};

export default ExerciseCard;
