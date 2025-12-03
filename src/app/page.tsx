import { IncentiveCalculator } from "@/components/IncentiveCalculator";

export default function Page() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center px-4 py-8 gap-6">
			<IncentiveCalculator />
			<p className="text-xs font-medium text-muted-foreground/50 tracking-widest uppercase select-none">
				A product by oLAB
			</p>
		</main>
	);
}
