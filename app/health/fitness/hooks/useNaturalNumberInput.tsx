import { useState, useCallback } from "react";

const useNaturalNumberInput = (initialValue: number) => {
  const [value, setValue] = useState<number>(initialValue);

  // Unified function to check if the input is a valid natural number (0 or positive integer)
  const isValidNaturalNumber = (value: string) => /^\d+$/.test(value);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (newValue === "" || isValidNaturalNumber(newValue)) {
        setValue(newValue === "" ? 0 : Number(newValue));
      }
    },
    []
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

export default useNaturalNumberInput;
