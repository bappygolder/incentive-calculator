import type { ChangeEvent, FocusEvent } from "react";
import { useState, useEffect } from "react";

type IncentiveInputProps = {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  size?: "default" | "large";
};

export function IncentiveInput({ value, onChange, label = "Total Potential Monthly Earnings (BDT)", size = "default" }: IncentiveInputProps) {
  const [displayValue, setDisplayValue] = useState(String(value));

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    // Allow empty input
    if (inputValue === "") {
      setDisplayValue("");
      onChange(0);
      return;
    }

    // Only allow digits
    if (!/^\d+$/.test(inputValue)) {
      return;
    }

    // Update display value
    setDisplayValue(inputValue);

    // Parse and update the numeric value
    const parsed = Number(inputValue);
    if (!Number.isNaN(parsed)) {
      onChange(parsed);
    }
  }

  function handleFocus(event: FocusEvent<HTMLInputElement>) {
    // Clear the field if it's 0
    if (value === 0) {
      setDisplayValue("");
    }
    // Select all text on focus for easy replacement
    event.target.select();
  }

  function handleBlur() {
    // If empty on blur, reset to the actual value (0)
    if (displayValue === "") {
      setDisplayValue(String(value));
    } else {
      // Remove leading zeros if any
      const cleaned = String(Number(displayValue));
      setDisplayValue(cleaned);
    }
  }

  // Sync display value with prop value when it changes externally
  useEffect(() => {
    setDisplayValue(String(value));
  }, [value]);

  const baseClasses =
    "mt-1 w-full rounded-xl border border-chrono-border-subtle bg-transparent px-4 text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chrono-accent transition-all duration-200";
  const sizeClasses =
    size === "large"
      ? "h-14 text-2xl md:text-3xl font-semibold tracking-tight"
      : "flex h-10 py-2 text-base";

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        type="text"
        inputMode="numeric"
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${baseClasses} ${sizeClasses}`}
      />
    </div>
  );
}
