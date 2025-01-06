import { useState, useEffect } from "react";

export const useCurrentDay = () => {
    const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

    useEffect(() => {
        const today = new Date();
        const dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1, etc.
        
        // Adjust the index for your routine (starting from Monday as 0)
        // If today is Sunday, set the index to 6 (for the last day of the week)
        setSelectedDayIndex(dayOfWeek === 0 ? 6 : dayOfWeek - 1); 
    }, []);

    return { selectedDayIndex, setSelectedDayIndex };
};
