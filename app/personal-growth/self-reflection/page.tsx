"use client";

import { useState } from "react";

const SelfReflection = () => {
  const [thoughts, setThoughts] = useState("");
  const [insights, setInsights] = useState("");

  const handleSubmit = () => {
    console.log("Thoughts:", thoughts, "Insights:", insights);
    // Save the self-reflection log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Self Reflection</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Thoughts:</label>
          <textarea
            className="mt-2 p-2 border rounded w-full"
            value={thoughts}
            onChange={(e) => setThoughts(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Insights:</label>
          <textarea
            className="mt-2 p-2 border rounded w-full"
            value={insights}
            onChange={(e) => setInsights(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Self Reflection
        </button>
      </form>
    </div>
  );
};

export default SelfReflection;
