import React, { FC, useCallback, useState } from "react";

// Custom hook for managing natural number input
const useNaturalNumberInput = (
  initialValue: number,
  onChange: (value: number) => void
) => {
  const [value, setValue] = useState<number>(initialValue);

  // Unified function to check if the input is a valid natural number (0 or positive integer)
  const isValidNaturalNumber = (value: string) => /^\d+$/.test(value);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (newValue === "" || isValidNaturalNumber(newValue)) {
        const numericValue = newValue === "" ? 0 : Number(newValue);
        setValue(numericValue);
        onChange(numericValue); // Pass the value back to parent via onChange
      }
    },
    [onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Enter",
        "Tab",
        "Control",
        "Meta", // Cmd or Windows key
        "Shift",
      ];

      if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    },
    []
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedValue = e.clipboardData.getData("text");
      if (!isValidNaturalNumber(pastedValue)) {
        e.preventDefault();
      }
    },
    []
  );

  const handleCut = useCallback((e: React.ClipboardEvent<HTMLInputElement>) => {
    const cutValue = e.clipboardData.getData("text");
    if (!isValidNaturalNumber(cutValue)) {
      e.preventDefault();
    }
  }, []);

  const handleCopy = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const copyValue = (e.target as HTMLInputElement).value;
      if (!isValidNaturalNumber(copyValue)) {
        e.preventDefault();
      }
    },
    []
  );

  return {
    value,
    handleInputChange,
    handleKeyDown,
    handlePaste,
    handleCut,
    handleCopy,
  };
};

interface WeightInputProps {
  value: number;
  onValueChange: (newValue: number) => void;
  isDisabled?: boolean;
}

const WeightInput: FC<WeightInputProps> = ({
  value,
  onValueChange,
  isDisabled = false,
}) => {
  const {
    value: currentWeight,
    handleInputChange,
    handleKeyDown,
    handlePaste,
    handleCut,
    handleCopy,
  } = useNaturalNumberInput(value, onValueChange);

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={currentWeight === 0 ? "" : currentWeight} // Show empty input for 0 weight
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        onCut={handleCut}
        onCopy={handleCopy}
        className="p-3 w-full rounded-t-lg bg-gray-200 dark:bg-slate-600"
        placeholder="Enter weight lifted (kg)"
        inputMode="numeric"
        disabled={isDisabled}
      />
    </div>
  );
};

export default WeightInput;
