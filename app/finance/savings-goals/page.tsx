"use client";

import { useState } from "react";

const SavingsGoals = () => {
  const [goal, setGoal] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    console.log("Goal:", goal, "Amount:", amount, "Date:", date, "Notes:", notes);
    // Save the savings goal log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>
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
          <label className="block text-lg">Amount:</label>
          <input
            type="number"
            className="mt-2 p-2 border rounded w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Date:</label>
          <input
            type="date"
            className="mt-2 p-2 border rounded w-full"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
          Log Savings Goal
        </button>
      </form>
    </div>
  );
};

export default SavingsGoals;
