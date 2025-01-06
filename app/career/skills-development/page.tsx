"use client";

import { useState } from "react";

const SkillsDevelopment = () => {
  const [skill, setSkill] = useState("");
  const [progress, setProgress] = useState("");

  const handleSubmit = () => {
    console.log("Skill:", skill, "Progress:", progress);
    // Save the skills development log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Skills Development</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Skill:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
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
          Log Skills Development
        </button>
      </form>
    </div>
  );
};

export default SkillsDevelopment;
