export type ComponentType = "fixed" | "percent" | "remainder";

export type IncentiveComponent = {
  id: string;
  label: string;
  type: ComponentType;
  value: number;
  locked?: boolean;
};

export type EngineConfig = {
  total: number;
  components: IncentiveComponent[];
};

export type EngineResultItem = {
  id: string;
  label: string;
  type: ComponentType;
  amount: number;
};

export type EngineResult = {
  items: EngineResultItem[];
  total: number;
};

function createId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function createDefaultEngineConfig(total: number = 10000): EngineConfig {
  return {
    total,
    components: [
      {
        id: createId(),
        label: "Base Weekly Payment",
        type: "fixed",
        value: 2000,
        locked: false,
      },
      {
        id: createId(),
        label: "Cadence Bonus",
        type: "fixed",
        value: 4000,
        locked: false,
      },
      {
        id: createId(),
        label: "KPI Bonus",
        type: "remainder",
        value: 0,
        locked: true,
      },
    ],
  };
}

export function computeEngineResult(config: EngineConfig): EngineResult {
  const total = Number.isFinite(config.total) && config.total > 0 ? config.total : 0;

  const fixedComponents = config.components.filter((c) => c.type === "fixed");
  const percentComponents = config.components.filter((c) => c.type === "percent");
  const remainderComponents = config.components.filter((c) => c.type === "remainder");

  const fixedAmounts = fixedComponents.map((c) => {
    const value = c.value > 0 ? c.value : 0;
    return { component: c, amount: value };
  });

  const percentAmounts = percentComponents.map((c) => {
    const percent = c.value > 0 ? c.value : 0;
    const amount = (total * percent) / 100;
    return { component: c, amount };
  });

  const fixedSum = fixedAmounts.reduce((sum, item) => sum + item.amount, 0);
  const percentSum = percentAmounts.reduce((sum, item) => sum + item.amount, 0);

  let remainderAmount = 0;
  if (remainderComponents.length > 0) {
    const rawRemainder = total - fixedSum - percentSum;
    remainderAmount = rawRemainder > 0 ? rawRemainder : 0;
  }

  const items: EngineResultItem[] = [];

  fixedAmounts.forEach(({ component, amount }) => {
    items.push({
      id: component.id,
      label: component.label,
      type: component.type,
      amount,
    });
  });

  percentAmounts.forEach(({ component, amount }) => {
    items.push({
      id: component.id,
      label: component.label,
      type: component.type,
      amount,
    });
  });

  if (remainderComponents[0]) {
    const component = remainderComponents[0];
    items.push({
      id: component.id,
      label: component.label,
      type: component.type,
      amount: remainderAmount,
    });
  }

  return {
    items,
    total,
  };
}
