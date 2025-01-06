"use client";

import { useState } from "react";

const Productivity = () => {
  const [task, setTask] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    console.log("Task:", task, "Time Spent:", timeSpent, "Notes:", notes);
    // Save the productivity log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Productivity</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Task:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Time Spent (hours):</label>
          <input
            type="number"
            className="mt-2 p-2 border rounded w-full"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Notes:</label>
          <textarea
            className="mt-2 p-2 border rounded w-full"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Productivity
        </button>
      </form>
    </div>
  );
};

export default Productivity;
