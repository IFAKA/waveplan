import { Dispatch, FC, SetStateAction, useState } from "react";
import { Exercise, Routine } from "../types";
import AddExercise from "./AddExercise";

interface EditRoutineProps {
  restTime: number;
  routine: Routine;
  selectedDayIndex: number;
  editRoutine: (dayIndex: number, updatedExercises: any) => void;
  addExercise: (exercise: Exercise) => void;
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
    routine[selectedDayIndex].exercises
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
    <div className="mt-4 dark:text-black">
      <h3 className="text-lg font-semibold mb-4">Edit Routine</h3>
      <div className="mb-4">
        <label className="block text-sm">Timer (Rest Time)</label>
        <input
          type="number"
          value={newRestTime}
          onChange={(e) => setNewRestTime(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Exercises</h4>
        {updatedExercises.map((exercise, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              value={exercise.name}
              onChange={(e) =>
                setUpdatedExercises((prev) => {
                  const updated = [...prev];
                  updated[index].name = e.target.value;
                  return updated;
                })
              }
              className="border p-2 rounded"
            />
            <input
              type="number"
              value={exercise.sets}
              onChange={(e) =>
                setUpdatedExercises((prev) => {
                  const updated = [...prev];
                  updated[index].sets = Number(e.target.value);
                  return updated;
                })
              }
              className="border p-2 rounded ml-2"
            />
            <input
              type="number"
              value={exercise.reps}
              onChange={(e) =>
                setUpdatedExercises((prev) => {
                  const updated = [...prev];
                  updated[index].reps = Number(e.target.value);
                  return updated;
                })
              }
              className="border p-2 rounded ml-2"
            />
            {index > 0 && (
              <button
                onClick={() => moveExerciseUp(index)}
                className="ml-2 bg-gray-500 text-white p-1 rounded"
              >
                ↑
              </button>
            )}
            {index < updatedExercises.length - 1 && (
              <button
                onClick={() => moveExerciseDown(index)}
                className="ml-2 bg-gray-500 text-white p-1 rounded"
              >
                ↓
              </button>
            )}
          </div>
        ))}
      </div>

      <AddExercise addExercise={addExercise} />

      <button
        className="mt-4 bg-green-500 text-white p-2 rounded"
        onClick={handleSave}
      >
        Save Routine
      </button>
      <button
        className="mt-4 bg-red-500 text-white p-2 rounded ml-2"
        onClick={() => setIsEditing(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default EditRoutine;
