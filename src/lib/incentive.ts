export type IncentiveConfig = {
  base: number;
  cadence: number;
};

export type IncentiveBreakdown = {
  total: number;
  base: number;
  cadence: number;
  kpi: number;
};

export const defaultIncentiveConfig: IncentiveConfig = {
  base: 2000,
  cadence: 4000
};

export function computeIncentiveBreakdown(
  total: number,
  config: IncentiveConfig = defaultIncentiveConfig
): IncentiveBreakdown {
	const safeTotal = Number.isFinite(total) ? total : 0;
	const base = config.base;
	const cadence = config.cadence;
	const kpi = safeTotal - (base + cadence);

	return {
	  total: safeTotal,
	  base,
	  cadence,
	  kpi
	};
}
