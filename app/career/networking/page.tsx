"use client";

import { useState } from "react";

const Networking = () => {
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    console.log("Contact:", contact, "Notes:", notes);
    // Save the networking log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Networking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Contact:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
          Log Networking Event
        </button>
      </form>
    </div>
  );
};

export default Networking;
