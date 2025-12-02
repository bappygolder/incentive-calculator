"use client";

import { useState } from "react";
import { IncentiveInput } from "./IncentiveInput";
import { BreakdownCard } from "./BreakdownCard";

export function IncentiveCalculator() {
	const [total, setTotal] = useState<number>(8000);

	// Derive all rows from total using fixed ratios based on the
	// default example (8000 → 2000, 1000, 4000, 1000).
	const safeTotal = Number.isFinite(total) ? total : 0;
	const baseAmount = Math.round(safeTotal * 0.25); // 25%
	const quarterlyAmount = Math.round(safeTotal * 0.125); // 12.5%
	const cadenceAmount = Math.round(safeTotal * 0.5); // 50%
	const kpiAmount = safeTotal - baseAmount - quarterlyAmount - cadenceAmount; // remaining 12.5%

	return (
		<div className="w-full max-w-2xl rounded-3xl border border-chrono-border-subtle/80 bg-chrono-bg-card/90 px-10 py-9 shadow-[0_22px_65px_rgba(0,0,0,0.7)] backdrop-blur-xl">
		  <header className="flex items-center justify-between gap-6">
			<div className="flex items-center gap-3">
			  <h1 className="text-2xl font-semibold tracking-tight text-foreground">Incentive Calculator</h1>
			  <div className="relative group">
				<button
				  type="button"
				  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-chrono-border-subtle text-[12px] font-semibold text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent"
				  aria-label="Incentive Calculator info"
				>
				  i
				</button>
				<div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-72 -translate-x-1/2 rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/95 px-3 py-2 text-xs text-chrono-fg-muted opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100">
				  Enter the total potential monthly earnings to see how they are split into base payment, cadence bonus, and KPI bonus.
				  <br />
				  <span className="font-medium text-chrono-fg-primary">Total Monthly Earnings (BDT)</span>
				</div>
			  </div>
			</div>

			<div className="w-64">
			  <IncentiveInput
				value={total}
				onChange={setTotal}
				size="large"
				label=""
			  />
			</div>
		  </header>

		  <BreakdownCard
			base={baseAmount}
			cadence={cadenceAmount}
			quarterly={quarterlyAmount}
			kpi={kpiAmount}
			total={safeTotal}
		  />
		</div>
	);
}
