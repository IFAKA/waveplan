export const useCurrentDay = () => {
  const selectedDayIndex = new Date().getDay() - 1;
  return { selectedDayIndex };
};
