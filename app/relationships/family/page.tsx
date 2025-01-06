"use client";

// app/relationships/family/page.tsx

import { FC, useState } from 'react';

const Family: FC = () => {
  const [interaction, setInteraction] = useState('');
  const [frequency, setFrequency] = useState<string>('Weekly');
  const [familyInteractions, setFamilyInteractions] = useState<{ interaction: string; frequency: string }[]>([]);

  const handleAddInteraction = () => {
    if (interaction) {
      setFamilyInteractions([...familyInteractions, { interaction, frequency }]);
      setInteraction('');
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Family Interaction Tracker</h2>
      <div>
        <input
          type="text"
          value={interaction}
          onChange={(e) => setInteraction(e.target.value)}
          placeholder="Interaction (e.g., Call Mom)"
          className="border p-2 mb-2 w-full"
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="border p-2 mb-2 w-full"
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
        <button
          onClick={handleAddInteraction}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Interaction
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">Family Interactions:</h3>
        <ul>
          {familyInteractions.map((item, index) => (
            <li key={index} className="mt-2">
              {item.interaction} - {item.frequency}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Family;
