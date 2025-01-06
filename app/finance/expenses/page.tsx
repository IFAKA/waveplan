"use client";

import { useState } from "react";

const Expenses = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    console.log("Expense:", expense, "Amount:", amount, "Category:", category);
    // Save the expense log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Expenses</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Expense:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
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
          <label className="block text-lg">Category:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Expense
        </button>
      </form>
    </div>
  );
};

export default Expenses;
