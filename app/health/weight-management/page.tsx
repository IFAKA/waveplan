"use client";

import { useState } from "react";

const WeightManagement = () => {
  const [weight, setWeight] = useState("");

  const handleSubmit = () => {
    console.log("Weight:", weight);
    // Save the weight log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Weight Management</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Current Weight (kg):</label>
          <input
            type="number"
            className="mt-2 p-2 border rounded w-full"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Weight
        </button>
      </form>
    </div>
  );
};

export default WeightManagement;
