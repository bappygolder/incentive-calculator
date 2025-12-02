import type { EngineResult } from "../lib/incentive-engine";

function formatBdt(value: number) {
  return `${value.toLocaleString("en-US")} BDT`;
}

export type InvoicePreviewProps = {
  result: EngineResult;
};

export function InvoicePreview({ result }: InvoicePreviewProps) {
  return (
    <div className="h-full flex flex-col p-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">Incentive Summary</h2>

      <div className="space-y-4 text-sm">
        {result.items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <span className="text-chrono-fg-muted">{item.label}</span>
            <span className="font-medium text-foreground">{formatBdt(item.amount)}</span>
          </div>
        ))}

        <div className="h-px bg-chrono-border-subtle my-4" />

        <div className="flex items-center justify-between">
          <span className="font-medium text-foreground">Total Earnings</span>
          <span className="font-semibold text-foreground">{formatBdt(result.total)}</span>
        </div>
      </div>
    </div>
  );
}
