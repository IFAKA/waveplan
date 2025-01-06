"use client";

import { useState } from "react";

const Prioritization = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = () => {
    console.log("Task:", task, "Priority:", priority);
    // Save the task prioritization
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Prioritization</h1>
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
          <label className="block text-lg">Priority:</label>
          <select
            className="mt-2 p-2 border rounded w-full"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Task Prioritization
        </button>
      </form>
    </div>
  );
};

export default Prioritization;
