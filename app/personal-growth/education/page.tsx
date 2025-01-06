"use client";

import { useState } from "react";

const Education = () => {
  const [subject, setSubject] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = () => {
    console.log("Subject:", subject, "Progress:", progress);
    // Save the education log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Subject:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
          Log Education Progress
        </button>
      </form>
    </div>
  );
};

export default Education;
