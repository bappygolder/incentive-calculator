"use client";

import { useState } from "react";
import { IncentiveCalculator } from "@/components/IncentiveCalculator";

export default function Page() {
	const [settingsOpen, setSettingsOpen] = useState(false);

	return (
		<main className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 py-8 md:py-12 gap-6">
			{/* Settings icon pinned to app's top-right corner */}
			<div className="pointer-events-none absolute right-6 top-6 flex flex-col items-end gap-3">
				<button
					type="button"
					onClick={() => setSettingsOpen((open) => !open)}
					className="pointer-events-auto text-chrono-fg-muted hover:text-chrono-accent transition-colors"
					aria-label="Toggle settings"
				>
					<svg
						aria-hidden="true"
						viewBox="0 0 24 24"
						className="h-5 w-5"
					>
						<path
							fill="currentColor"
							d="M12 9.5A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5Zm8.94 2.06-1.7-.98c.04-.36.06-.73.06-1.08s-.02-.72-.06-1.08l1.7-.98a.75.75 0 0 0 .27-1.02l-1.6-2.77a.75.75 0 0 0-.96-.32l-1.7.98a7.2 7.2 0 0 0-1.88-1.09V2.1A.75.75 0 0 0 13.37 1h-3.2a.75.75 0 0 0-.75.75v1.96a7.2 7.2 0 0 0-1.88 1.09l-1.7-.98a.75.75 0 0 0-.96.32L3.28 6.91a.75.75 0 0 0 .27 1.02l1.7.98c-.04.36-.06.73-.06 1.08s.02.72.06 1.08l-1.7.98a.75.75 0 0 0-.27 1.02l1.6 2.77c.2.35.64.47.99.27l1.7-.98c.56.46 1.2.83 1.88 1.09v1.96c0 .41.34.75.75.75h3.2c.41 0 .75-.34.75-.75v-1.96c.68-.26 1.32-.63 1.88-1.09l1.7.98c.35.2.79.08.99-.27l1.6-2.77a.75.75 0 0 0-.27-1.02Zm-4.41 1.39A4.98 4.98 0 0 1 12 17a4.98 4.98 0 0 1-4.53-3.05A5.02 5.02 0 0 1 7 12c0-.73.16-1.42.47-2.05A4.98 4.98 0 0 1 12 7a4.98 4.98 0 0 1 4.53 3.05c.31.63.47 1.32.47 2.05 0 .73-.16 1.42-.47 2.05Z"
						/>
					</svg>
				</button>

				{settingsOpen && (
					<div className="pointer-events-auto w-64 rounded-2xl bg-chrono-bg-card/80 px-4 py-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
						<div className="space-y-3 text-sm">
							<div className="text-[11px] font-medium text-chrono-fg-muted">Social</div>
							<a
								href="https://github.com/bappygolder/incentive-calculator"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 rounded-xl px-2 py-2 text-chrono-fg-primary transition-colors hover:bg-white/[0.02]"
							>
								<svg
									aria-hidden="true"
									viewBox="0 0 24 24"
									className="h-4 w-4 text-chrono-fg-muted"
								>
									<path
										fill="currentColor"
										d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.85 9.68.5.1.68-.22.68-.48 0-.23-.01-.99-.01-1.8-2.49.55-3.02-1.09-3.02-1.09-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-1.99-.23-4.09-1.03-4.09-4.6 0-1.02.35-1.85.93-2.5-.09-.23-.4-1.17.09-2.44 0 0 .75-.25 2.45.96a8.18 8.18 0 0 1 4.46 0c1.7-1.21 2.45-.96 2.45-.96.49 1.27.18 2.21.09 2.44.58.65.93 1.48.93 2.5 0 3.58-2.1 4.37-4.1 4.6.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
									/>
								</svg>
								<div className="flex flex-col">
									<span className="text-sm font-medium">GitHub</span>
									<span className="text-xs text-chrono-fg-muted">bappygolder/incentive-calculator</span>
								</div>
							</a>
						</div>
					</div>
				)}
			</div>

			{/* Centered main card */}
			<IncentiveCalculator />

			<p className="text-xs font-medium text-muted-foreground/50 tracking-widest uppercase select-none">
				A product by oLAB
			</p>
		</main>
	);
}
