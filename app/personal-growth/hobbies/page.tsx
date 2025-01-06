"use client";

import { useState } from "react";

const Hobbies = () => {
  const [hobby, setHobby] = useState("");
  const [timeSpent, setTimeSpent] = useState("");

  const handleSubmit = () => {
    console.log("Hobby:", hobby, "Time Spent:", timeSpent);
    // Save the hobby log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Hobby:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Time Spent (minutes):</label>
          <input
            type="number"
            className="mt-2 p-2 border rounded w-full"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Hobby Time
        </button>
      </form>
    </div>
  );
};

export default Hobbies;
