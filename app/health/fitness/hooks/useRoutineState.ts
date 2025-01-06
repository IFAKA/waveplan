// /hooks/useRoutineState.ts
import { useState } from "react";

export const useRoutineState = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditRoutine = () => {
    setIsEditing(!isEditing);
  };

  return {
    isEditing,
    setIsEditing,
    handleEditRoutine,
  };
};
