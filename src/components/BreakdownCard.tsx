"use client";

import { useState } from "react";

type BreakdownCardProps = {
	base: number;
	cadence: number;
	quarterly: number;
	kpi: number;
	total: number;
};

function formatBdt(value: number) {
	return `${value.toLocaleString("en-US")} BDT`;
}

export function BreakdownCard({ base, cadence, quarterly, kpi, total }: BreakdownCardProps) {
	const [baseOpen, setBaseOpen] = useState(false);
	const [cadenceOpen, setCadenceOpen] = useState(false);
	const [quarterlyOpen, setQuarterlyOpen] = useState(false);
	const [kpiOpen, setKpiOpen] = useState(false);

	const [baseSummary, setBaseSummary] = useState("");
	const [cadenceSummary, setCadenceSummary] = useState("");
	const [quarterlySummary, setQuarterlySummary] = useState("");
	const [kpiSummary, setKpiSummary] = useState("");

	return (
		<section className="mt-8 text-sm">
		  <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-chrono-fg-muted">Breakdown</h2>
		  <div className="mt-4 space-y-5">
			{/* Base Weekly Payment */}
			<div className="space-y-2">
			  <div className="flex items-center justify-between">
				<span className="text-muted-foreground">Base Weekly Payment</span>
				<span className="font-medium text-foreground">{formatBdt(base)}</span>
			  </div>
			  <div className="flex justify-start">
				<button
				  type="button"
				  onClick={() => setBaseOpen((open) => !open)}
				  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-chrono-border-subtle text-[12px] font-semibold text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent"
				  aria-label="Toggle summary for Base Weekly Payment"
				>
				  {baseOpen ? "⌄" : "›"}
				</button>
			  </div>
			  {baseOpen && (
				<textarea
				  value={baseSummary}
				  onChange={(event) => setBaseSummary(event.target.value)}
				  placeholder="Add a short summary for Base Weekly Payment..."
				  className="w-full min-h-[64px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-3 py-2 text-xs text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent"
				/>
			  )}
			</div>

			{/* Quarterly Bonus */}
			<div className="space-y-2">
			  <div className="flex items-center justify-between">
				<span className="text-muted-foreground">Quarterly Bonus</span>
				<span className="font-medium text-foreground">{formatBdt(quarterly)}</span>
			  </div>
			  <div className="flex justify-start">
				<button
				  type="button"
				  onClick={() => setQuarterlyOpen((open) => !open)}
				  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-chrono-border-subtle text-[12px] font-semibold text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent"
				  aria-label="Toggle summary for Quarterly Bonus"
				>
				  {quarterlyOpen ? "⌄" : "›"}
				</button>
			  </div>
			  {quarterlyOpen && (
				<textarea
				  value={quarterlySummary}
				  onChange={(event) => setQuarterlySummary(event.target.value)}
				  placeholder="Add a short summary for Quarterly Bonus..."
				  className="w-full min-h-[64px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-3 py-2 text-xs text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent"
				/>
			  )}
			</div>

			{/* Cadence Bonus */}
			<div className="space-y-2">
			  <div className="flex items-center justify-between">
				<span className="text-muted-foreground">Cadence Bonus</span>
				<span className="font-medium text-foreground">{formatBdt(cadence)}</span>
			  </div>
			  <div className="flex justify-start">
				<button
				  type="button"
				  onClick={() => setCadenceOpen((open) => !open)}
				  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-chrono-border-subtle text-[12px] font-semibold text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent"
				  aria-label="Toggle summary for Cadence Bonus"
				>
				  {cadenceOpen ? "⌄" : "›"}
				</button>
			  </div>
			  {cadenceOpen && (
				<textarea
				  value={cadenceSummary}
				  onChange={(event) => setCadenceSummary(event.target.value)}
				  placeholder="Add a short summary for Cadence Bonus..."
				  className="w-full min-h-[64px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-3 py-2 text-xs text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent"
				/>
			  )}
			</div>

			{/* KPI Bonus */}
			<div className="space-y-2">
			  <div className="flex items-center justify-between">
				<span className="text-muted-foreground">KPI Bonus</span>
				<span className="font-medium text-foreground">{formatBdt(kpi)}</span>
			  </div>
			  <div className="flex justify-start">
				<button
				  type="button"
				  onClick={() => setKpiOpen((open) => !open)}
				  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-chrono-border-subtle text-[12px] font-semibold text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent"
				  aria-label="Toggle summary for KPI Bonus"
				>
				  {kpiOpen ? "⌄" : "›"}
				</button>
			  </div>
			  {kpiOpen && (
				<textarea
				  value={kpiSummary}
				  onChange={(event) => setKpiSummary(event.target.value)}
				  placeholder="Add a short summary for KPI Bonus..."
				  className="w-full min-h-[64px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-3 py-2 text-xs text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent"
				/>
			  )}
			</div>
		  </div>
		</section>
	);
}
