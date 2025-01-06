"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

type HeatmapProps = {
    data: { date: string; value: number; items: string[] }[];
};

const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size for responsive behavior
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Get the year from the data or current year if not available
    const getYearFromData = () => {
        const years = data.map(({ date }) => new Date(date).getFullYear());
        return Math.max(...years);
    };
    const year = getYearFromData();

    const getQuarterData = () => {
        const quarters = [
            { start: new Date(year, 0, 1), end: new Date(year, 2, 31) }, // Q1
            { start: new Date(year, 3, 1), end: new Date(year, 5, 30) }, // Q2
            { start: new Date(year, 6, 1), end: new Date(year, 8, 30) }, // Q3
            { start: new Date(year, 9, 1), end: new Date(year, 11, 31) }, // Q4
        ];

        return quarters.map((quarter, quarterIndex) => {
            const daysInQuarter: (string | null)[] = [];
            const firstDay = quarter.start.getDay(); // Day of the week (0: Sunday, 6: Saturday)

            // Add placeholders for missing days before the first date
            for (let i = 0; i < firstDay; i++) {
                daysInQuarter.push(null); // Empty cells
            }

            // Add actual dates for the quarter
            for (
                let date = new Date(quarter.start);
                date <= quarter.end;
                date = new Date(date.getTime() + 24 * 60 * 60 * 1000)
            ) {
                const formattedDate = date.toISOString().split("T")[0];
                if (formattedDate >= `${year}-01-01`) {
                    daysInQuarter.push(formattedDate);
                }
            }

            return daysInQuarter.map((day, dayIndex) => ({
                key: day || `placeholder-${quarterIndex}-${dayIndex}`,
                date: day,
            }));
        });
    };

    const quarterDays = getQuarterData();

    const dataMap = data.reduce((acc, { date, value, items }) => {
        acc[date] = { value, items };
        return acc;
    }, {} as Record<string, { value: number; items: string[] }>);

    const getCellColor = (value: number | undefined, isToday: boolean): string => {
        const baseColor = !value
            ? "bg-gray-100"
            : value <= 33
                ? "bg-blue-100"
                : value <= 66
                    ? "bg-blue-400"
                    : "bg-blue-700";
        return isToday ? `${baseColor} border-2 border-red-500` : baseColor;
    };

    const handleClick = (day: string) => {
        if (dataMap[day]) {
            setSelectedDate(day);
            setSelectedItems(dataMap[day].items || []);
        }
    };

    const closeModal = () => {
        setSelectedDate(null);
        setSelectedItems([]);
    };

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    return (
        <>
            {/* Heatmap Grid */}
            <div
                className={
                    isMobile
                        ? "grid gap-4"
                        : "grid gap-4 grid-cols-4"
                }
            >
                {isMobile
                    ? quarterDays.map((quarter) => (
                        <div key={`mobile-quarter-${quarter[0]?.key}`} className="w-full">
                            <div className="grid grid-rows-7 grid-flow-col gap-1">
                                {quarter.map(({ key, date }) => (
                                    <motion.div
                                        key={key}
                                        layoutId={date || key}
                                        className={`w-4 h-4 ${date
                                            ? getCellColor(dataMap[date]?.value, date === today)
                                            : "bg-transparent"
                                            } ${date && date >= `${year}-01-01` ? "cursor-pointer" : ""}`}
                                        title={
                                            date && date >= `${year}-01-01`
                                                ? `${date}: ${dataMap[date]?.value || 0}`
                                                : ""
                                        }
                                        onClick={
                                            date && date >= `${year}-01-01`
                                                ? () => handleClick(date)
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                    : quarterDays.map((quarter, quarterIndex) => (
                        <div key={`desktop-quarter-${quarterIndex}`} className="w-full">
                            <div className="grid grid-rows-7 grid-flow-col gap-1 w-fit">
                                {quarter.map(({ key, date }) => (
                                    <motion.div
                                        key={key}
                                        layoutId={date || key}
                                        className={`w-3 h-3 rounded 1fr ${date
                                            ? getCellColor(dataMap[date]?.value, date === today)
                                            : "bg-transparent"
                                            } ${date && date >= `${year}-01-01` ? "cursor-pointer" : ""}`}
                                        title={
                                            date && date >= `${year}-01-01`
                                                ? `${date}: ${dataMap[date]?.value || 0}`
                                                : ""
                                        }
                                        onClick={
                                            date && date >= `${year}-01-01`
                                                ? () => handleClick(date)
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                            <h3>Hello</h3>
                        </div>
                    ))
                }
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedDate && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        />
                        {/* Modal Content */}
                        <motion.div
                            layoutId={selectedDate}
                            className={`fixed z-50 ${isMobile
                                ? "inset-0 p-4"
                                : "inset-0 sm:m-auto sm:w-96 sm:h-auto p-6"
                                } bg-white rounded-lg shadow-lg flex flex-col`}
                            initial={{ borderRadius: "50%" }}
                            animate={{ borderRadius: isMobile ? "0" : "0.5rem" }}
                            exit={{ borderRadius: "50%" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-lg font-bold mb-4">{selectedDate}</h2>
                            <ul className="list-disc pl-5 flex-grow">
                                {selectedItems.length > 0 ? (
                                    selectedItems.map((item, index) => (
                                        <li key={index} className="text-gray-700">
                                            {item}
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">No items available</li>
                                )}
                            </ul>
                            <button
                                onClick={closeModal}
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Close
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Heatmap;
