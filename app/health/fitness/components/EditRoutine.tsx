import { Dispatch, FC, SetStateAction, useState } from "react";
import { Exercise, Routine } from "../types";
import AddExercise from "./AddExercise";
import { motion, AnimatePresence } from "framer-motion";

interface EditRoutineProps {
  restTime: number;
  routine: Routine;
  selectedDayIndex: number;
  editRoutine: (dayIndex: number, updatedExercises: Exercise[]) => void;
  addExercise: (exercise: { name: string; sets: number; reps: number }) => void;
  setRestTime: (newRestTime: number) => void;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
}

const EditRoutine: FC<EditRoutineProps> = ({
  restTime,
  routine,
  selectedDayIndex,
  editRoutine,
  addExercise,
  setRestTime,
  setIsEditing,
}) => {
  const [newRestTime, setNewRestTime] = useState<number>(restTime);
  const [updatedExercises, setUpdatedExercises] = useState(
    routine.routines[selectedDayIndex].exercises
  );

  const handleSave = () => {
    editRoutine(selectedDayIndex, updatedExercises); // Save exercises
    setRestTime(newRestTime); // Save rest time
    setIsEditing(false); // Exit editing mode
  };

  const moveExerciseUp = (index: number) => {
    if (index > 0) {
      const newExercises = [...updatedExercises];
      [newExercises[index - 1], newExercises[index]] = [
        newExercises[index],
        newExercises[index - 1],
      ];
      setUpdatedExercises(newExercises);
    }
  };

  const moveExerciseDown = (index: number) => {
    if (index < updatedExercises.length - 1) {
      const newExercises = [...updatedExercises];
      [newExercises[index + 1], newExercises[index]] = [
        newExercises[index],
        newExercises[index + 1],
      ];
      setUpdatedExercises(newExercises);
    }
  };

  return (
    <div className="max-w-full flex flex-col flex-1 p-4 space-y-4 sm:max-w-md sm:mx-auto sm:p-6 justify-between">
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.1 }}
      >
        {/* Rest Time Input */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-800 dark:text-white">
            Timer (Rest Time)
          </h4>
          <input
            type="number"
            value={newRestTime}
            onChange={(e) => setNewRestTime(Number(e.target.value))}
            className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
          />
        </div>

        {/* Exercises Section */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="font-semibold text-gray-800 dark:text-white">
            Exercises
          </h4>
          <div className="overflow-y-auto max-h-64 space-y-4">
            <AnimatePresence>
              {updatedExercises.map((exercise, index) => {
                if (!exercise) return null;
                const isStrengthExercise = exercise.type === "strength";
                if (isStrengthExercise) {
                  return (
                    <div
                      key={exercise.name + index}
                      className="flex items-center space-x-4"
                    >
                      <input
                        type="text"
                        value={exercise.name}
                        onChange={(e) =>
                          setUpdatedExercises((prev) => {
                            const updated = [...prev];
                            if (updated[index].type === "strength") {
                              updated[index].name = e.target.value;
                              return updated;
                            } else {
                              return prev;
                            }
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                      />
                      <input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) =>
                          setUpdatedExercises((prev) => {
                            const updated = [...prev];
                            if (updated[index].type === "strength") {
                              updated[index].sets = Number(e.target.value);
                              return updated;
                            } else {
                              return prev;
                            }
                          })
                        }
                        className="w-16 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                      />
                      <input
                        type="number"
                        value={exercise.reps}
                        onChange={(e) =>
                          setUpdatedExercises((prev) => {
                            const updated = [...prev];
                            if (updated[index].type === "strength") {
                              updated[index].reps = Number(e.target.value);
                              return updated;
                            } else {
                              return prev;
                            }
                          })
                        }
                        className="w-16 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                      />

                      {/* Move Buttons */}
                      <div className="flex space-x-2">
                        {index > 0 && (
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => moveExerciseUp(index)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600"
                          >
                            ↑
                          </motion.button>
                        )}
                        {index < updatedExercises.length - 1 && (
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => moveExerciseDown(index)}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600"
                          >
                            ↓
                          </motion.button>
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Add Exercise */}
        <AddExercise addExercise={addExercise} />
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
          onClick={handleSave}
        >
          Save Routine
        </button>
        <button
          className="w-full py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditRoutine;
