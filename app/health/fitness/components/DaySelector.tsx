import React from "react";

interface DaySelectorProps {
    selectedDayIndex: number;
    setSelectedDayIndex: (index: number) => void;
    days: { dayOfWeek: string; routineName: string }[];
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDayIndex, setSelectedDayIndex, days }) => {
    return (
        <>
            <select
                value={selectedDayIndex}
                onChange={(e) => setSelectedDayIndex(Number(e.target.value))}
                className="dark:text-white text-black bg-gray-500 dark:bg-gray-500 h-10 px-1 h-7 rounded"
            >
                {days.map((day, index) => (
                    <option key={index} value={index}>
                        {day.dayOfWeek} - {day.routineName}
                    </option>
                ))}
            </select>
        </>
    );
};

export default DaySelector;
