"use client";

import { useState, useEffect } from "react";

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

	// Load from local storage on mount
	useEffect(() => {
		const saved = localStorage.getItem("incentive-calculator-summaries");
		if (saved) {
			try {
				const parsed = JSON.parse(saved);
				if (parsed.base) setBaseSummary(parsed.base);
				if (parsed.cadence) setCadenceSummary(parsed.cadence);
				if (parsed.quarterly) setQuarterlySummary(parsed.quarterly);
				if (parsed.kpi) setKpiSummary(parsed.kpi);
			} catch (e) {
				console.error("Failed to parse saved summaries", e);
			}
		}
	}, []);

	// Save to local storage on change
	useEffect(() => {
		const data = {
			base: baseSummary,
			cadence: cadenceSummary,
			quarterly: quarterlySummary,
			kpi: kpiSummary,
		};
		localStorage.setItem("incentive-calculator-summaries", JSON.stringify(data));
	}, [baseSummary, cadenceSummary, quarterlySummary, kpiSummary]);

	return (
		<section className="mt-8 text-sm">
			<div className="space-y-4">
				{/* Base Weekly Payment */}
				<div className="group rounded-lg px-3 py-3 transition-colors duration-200 ease-out hover:bg-white/[0.02]">
					<div className="flex items-center justify-between mb-2">
						<span className="text-muted-foreground font-medium">Base Weekly Payment</span>
						<span className="font-semibold text-foreground tracking-tight">{formatBdt(base)}</span>
					</div>
					<div className="flex justify-start">
						<button
							type="button"
							onClick={() => setBaseOpen((open) => !open)}
							className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-chrono-border-subtle text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent hover:bg-chrono-accent/10 transition-all"
							aria-label="Toggle summary for Base Weekly Payment"
						>
							{baseOpen ? (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
							) : (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
							)}
						</button>
					</div>
					{baseOpen && (
						<div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
							<textarea
								value={baseSummary}
								onChange={(event) => setBaseSummary(event.target.value)}
								placeholder="Add a short summary for Base Weekly Payment..."
								className="w-full min-h-[120px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-4 py-3 text-sm text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent transition-shadow"
							/>
						</div>
					)}
				</div>

				{/* Quarterly Bonus */}
				<div className="group rounded-lg px-3 py-3 transition-colors duration-200 ease-out hover:bg-white/[0.02]">
					<div className="flex items-center justify-between mb-2">
						<span className="text-muted-foreground font-medium">Quarterly Bonus</span>
						<span className="font-semibold text-foreground tracking-tight">{formatBdt(quarterly)}</span>
					</div>
					<div className="flex justify-start">
						<button
							type="button"
							onClick={() => setQuarterlyOpen((open) => !open)}
							className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-chrono-border-subtle text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent hover:bg-chrono-accent/10 transition-all"
							aria-label="Toggle summary for Quarterly Bonus"
						>
							{quarterlyOpen ? (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
							) : (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
							)}
						</button>
					</div>
					{quarterlyOpen && (
						<div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
							<textarea
								value={quarterlySummary}
								onChange={(event) => setQuarterlySummary(event.target.value)}
								placeholder="Add a short summary for Quarterly Bonus..."
								className="w-full min-h-[120px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-4 py-3 text-sm text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent transition-shadow"
							/>
						</div>
					)}
				</div>

				{/* Cadence Bonus */}
				<div className="group rounded-lg px-3 py-3 transition-colors duration-200 ease-out hover:bg-white/[0.02]">
					<div className="flex items-center justify-between mb-2">
						<span className="text-muted-foreground font-medium">Cadence Bonus</span>
						<span className="font-semibold text-foreground tracking-tight">{formatBdt(cadence)}</span>
					</div>
					<div className="flex justify-start">
						<button
							type="button"
							onClick={() => setCadenceOpen((open) => !open)}
							className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-chrono-border-subtle text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent hover:bg-chrono-accent/10 transition-all"
							aria-label="Toggle summary for Cadence Bonus"
						>
							{cadenceOpen ? (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
							) : (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
							)}
						</button>
					</div>
					{cadenceOpen && (
						<div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
							<textarea
								value={cadenceSummary}
								onChange={(event) => setCadenceSummary(event.target.value)}
								placeholder="Add a short summary for Cadence Bonus..."
								className="w-full min-h-[120px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-4 py-3 text-sm text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent transition-shadow"
							/>
						</div>
					)}
				</div>

				{/* KPI Bonus */}
				<div className="group rounded-lg px-3 py-3 transition-colors duration-200 ease-out hover:bg-white/[0.02]">
					<div className="flex items-center justify-between mb-2">
						<span className="text-muted-foreground font-medium">KPI Bonus</span>
						<span className="font-semibold text-foreground tracking-tight">{formatBdt(kpi)}</span>
					</div>
					<div className="flex justify-start">
						<button
							type="button"
							onClick={() => setKpiOpen((open) => !open)}
							className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-chrono-border-subtle text-chrono-fg-muted hover:border-chrono-accent hover:text-chrono-accent hover:bg-chrono-accent/10 transition-all"
							aria-label="Toggle summary for KPI Bonus"
						>
							{kpiOpen ? (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
							) : (
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
							)}
						</button>
					</div>
					{kpiOpen && (
						<div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
							<textarea
								value={kpiSummary}
								onChange={(event) => setKpiSummary(event.target.value)}
								placeholder="Add a short summary for KPI Bonus..."
								className="w-full min-h-[120px] resize-none rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/60 px-4 py-3 text-sm text-chrono-fg-primary placeholder:text-chrono-fg-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-chrono-accent transition-shadow"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
