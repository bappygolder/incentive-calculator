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
		<div className="w-full max-w-4xl min-h-[600px] max-h-[85vh] overflow-y-auto scrollbar-none rounded-3xl border border-chrono-border-subtle/80 bg-chrono-bg-card/90 px-6 py-6 md:px-10 md:py-9 shadow-[0_22px_65px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300">
			<header className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
				<div className="flex items-center gap-3">
					<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">Incentive Calculator</h1>
					<div className="relative group">
						<button
							type="button"
							className="inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full border border-chrono-border-subtle text-[12px] font-semibold text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent transition-colors"
							aria-label="Incentive Calculator info"
						>
							i
						</button>
						<div className="pointer-events-none absolute left-1/2 md:left-full top-full md:top-1/2 z-10 mt-2 md:mt-0 md:ml-3 w-64 md:w-72 -translate-x-1/2 md:translate-x-0 rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/95 px-4 py-3 text-xs text-chrono-fg-muted opacity-0 shadow-lg backdrop-blur-sm transition-opacity group-hover:opacity-100">
							Enter the total potential monthly earnings to see how they are split into base payment, cadence bonus, and KPI bonus.
							<br />
							<span className="mt-1 block font-medium text-chrono-fg-primary">Total Monthly Earnings (BDT)</span>
						</div>
					</div>
				</div>

				<div className="w-full md:w-64">
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
