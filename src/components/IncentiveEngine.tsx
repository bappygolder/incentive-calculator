"use client";

import { useMemo, useState } from "react";
import {
  computeEngineResult,
  createDefaultEngineConfig,
  type EngineConfig,
} from "../lib/incentive-engine";
import { EngineConfigPanel } from "./EngineConfigPanel";
import { InvoicePreview } from "./InvoicePreview";

export function IncentiveEngine() {
  const [config, setConfig] = useState<EngineConfig>(() => createDefaultEngineConfig(10000));

  const result = useMemo(() => computeEngineResult(config), [config]);

  function handleTotalChange(total: number) {
    setConfig((previous) => ({ ...previous, total }));
  }

  function handleComponentsChange(components: EngineConfig["components"]) {
    setConfig((previous) => ({ ...previous, components }));
  }

  function handleResetDefaults() {
    setConfig((previous) => ({ ...createDefaultEngineConfig(previous.total) }));
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Page Header */}
      <header className="mb-6 space-y-1">
        <h1 className="text-3xl font-semibold text-foreground">Incentive Engine</h1>
        <p className="text-sm text-muted-foreground">
          Configure how earnings are distributed across fixed, variable, and remainder components.
        </p>
      </header>

      {/* Two Column Layout */}
      <div className="flex-1 min-h-0 flex items-stretch gap-6">
        {/* Left: Generator */}
        <section className="flex-[1.2] h-full overflow-y-auto pr-2">
          <EngineConfigPanel
            total={config.total}
            components={config.components}
            onTotalChange={handleTotalChange}
            onComponentsChange={handleComponentsChange}
            onResetDefaults={handleResetDefaults}
          />
        </section>

        {/* Right: Summary */}
        <section className="flex-[0.8] h-full rounded-2xl border border-chrono-border-subtle bg-chrono-bg-card/60 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <InvoicePreview result={result} />
          </div>
        </section>
      </div>
    </div>
  );
}
