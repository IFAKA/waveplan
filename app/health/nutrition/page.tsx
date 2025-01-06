import { useState } from "react";

const Nutrition = () => {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = () => {
    console.log("Food:", food, "Calories:", calories);
    // Save the nutrition log
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Nutrition</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Food:</label>
          <input
            type="text"
            className="mt-2 p-2 border rounded w-full"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-lg">Calories:</label>
          <input
            type="number"
            className="mt-2 p-2 border rounded w-full"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Log Nutrition
        </button>
      </form>
    </div>
  );
};

export default Nutrition;
