"use client";

import { useState } from "react";

const RomanticRelationships = () => {
  const [interaction, setInteraction] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    console.log("Romantic Interaction:", interaction, "Notes:", notes);
    // Save the romantic relationship log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Romantic Relationships</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Interaction:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={interaction}
            onChange={(e) => setInteraction(e.target.value)}
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
          Log Romantic Interaction
        </button>
      </form>
    </div>
  );
};

export default RomanticRelationships;
