"use client";

import { useState } from "react";

const GoalSetting = () => {
  const [goal, setGoal] = useState("");
  const [deadline, setDeadline] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = () => {
    console.log("Goal:", goal, "Deadline:", deadline, "Progress:", progress);
    // Save the goal setting log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Goal Setting</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Goal:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Deadline:</label>
          <input
            type="date"
            className="mt-2 p-2 border rounded w-full"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Progress:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Goal Progress
        </button>
      </form>
    </div>
  );
};

export default GoalSetting;
