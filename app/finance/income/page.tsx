"use client";

import { useState } from "react";

const Income = () => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    console.log("Income Source:", source, "Amount:", amount, "Date:", date);
    // Save the income log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Income</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Source:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={source}
            onChange={(e) => setSource(e.target.value)}
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
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Income
        </button>
      </form>
    </div>
  );
};

export default Income;
