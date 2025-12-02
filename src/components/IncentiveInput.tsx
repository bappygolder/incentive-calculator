import type { ChangeEvent } from "react";

type IncentiveInputProps = {
  value: number;
  onChange: (value: number) => void;
  label?: string;
  size?: "default" | "large";
};

export function IncentiveInput({ value, onChange, label = "Total Potential Monthly Earnings (BDT)", size = "default" }: IncentiveInputProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const parsed = Number(event.target.value);
    if (Number.isNaN(parsed)) {
      onChange(0);
      return;
    }
    onChange(parsed);
  }

  const baseClasses =
    "mt-1 w-full rounded-md border border-chrono-border-subtle bg-transparent px-3 text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chrono-accent";
  const sizeClasses =
    size === "large"
      ? "h-14 text-2xl font-semibold tracking-tight"
      : "flex h-9 py-1 text-sm";

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-muted-foreground">
        {label}
      </label>
      <input
        type="number"
        min={0}
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        className={`${baseClasses} ${sizeClasses}`}
      />
    </div>
  );
}
