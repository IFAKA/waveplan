"use client";

// app/health/sleep/page.tsx

import { FC, useState } from 'react';

const Sleep: FC = () => {
  const [hours, setHours] = useState<number | string>('');
  const [quality, setQuality] = useState<string>('Good');
  const [sleepData, setSleepData] = useState<{ hours: number; quality: string }[]>([]);

  const handleAddSleep = () => {
    if (hours) {
      setSleepData([...sleepData, { hours: Number(hours), quality }]);
      setHours('');
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sleep Tracker</h2>
      <div>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours of Sleep"
          className="border p-2 mb-2 w-full"
        />
        <select
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          className="border p-2 mb-2 w-full"
        >
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
        </select>
        <button
          onClick={handleAddSleep}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Sleep Record
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Your Sleep Data:</h3>
        <ul>
          {sleepData.map((sleep, index) => (
            <li key={index} className="mt-2">
              {sleep.hours} hours - {sleep.quality}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sleep;
