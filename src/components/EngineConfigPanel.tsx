"use client";

import type { IncentiveComponent } from "../lib/incentive-engine";
import { IncentiveInput } from "./IncentiveInput";

export type EngineConfigPanelProps = {
  total: number;
  components: IncentiveComponent[];
  onTotalChange: (value: number) => void;
  onComponentsChange: (components: IncentiveComponent[]) => void;
  onResetDefaults: () => void;
};

function createId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function getComponentIcon(type: IncentiveComponent["type"]) {
  switch (type) {
    case "fixed":
      return "▣";
    case "percent":
      return "◐";
    case "remainder":
      return "◇";
  }
}

export function EngineConfigPanel({
  total,
  components,
  onTotalChange,
  onComponentsChange,
  onResetDefaults,
}: EngineConfigPanelProps) {
  function updateComponent(id: string, patch: Partial<IncentiveComponent>) {
    onComponentsChange(
      components.map((component) =>
        component.id === id ? { ...component, ...patch } : component,
      ),
    );
  }

  function removeComponent(id: string) {
    const target = components.find((c) => c.id === id);
    if (!target || target.locked) return;
    if (components.length <= 1) return;
    onComponentsChange(components.filter((component) => component.id !== id));
  }

  function addComponent(type: IncentiveComponent["type"] = "fixed") {
    const base: IncentiveComponent = {
      id: createId(),
      label: "New Component",
      type,
      value: type === "percent" ? 10 : 1000,
      locked: false,
    };
    onComponentsChange([...components, base]);
  }

  return (
    <section className="rounded-2xl border border-chrono-border-subtle bg-chrono-bg-card/60 p-6 space-y-6">
      {/* Total Earnings */}
      <div>
        <IncentiveInput value={total} onChange={onTotalChange} size="large" />
      </div>

      {/* Components Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-foreground">Components</h3>
        <button
          type="button"
          onClick={() => addComponent()}
          className="inline-flex h-9 items-center gap-2 rounded-lg border border-chrono-border-subtle bg-chrono-bg-card/80 px-4 text-sm text-chrono-fg-primary transition-colors hover:bg-chrono-bg-card hover:border-chrono-accent"
        >
          <span className="text-base leading-none">+</span>
          <span>Add component</span>
        </button>
      </div>

      {/* Component Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {components.map((component) => (
          <div
            key={component.id}
            className="rounded-xl border border-chrono-border-subtle bg-chrono-bg-card/40 p-4 space-y-3"
          >
            {/* Card Header: Icon + Label */}
            <div className="flex items-center gap-2">
              <span className="text-chrono-fg-muted text-sm">
                {getComponentIcon(component.type)}
              </span>
              <input
                type="text"
                value={component.label}
                onChange={(event) =>
                  updateComponent(component.id, { label: event.target.value })
                }
                className="flex-1 bg-transparent text-sm font-medium text-chrono-fg-primary placeholder:text-chrono-fg-muted focus:outline-none"
                placeholder="Component name"
              />
              {!component.locked && (
                <button
                  type="button"
                  onClick={() => removeComponent(component.id)}
                  className="text-chrono-fg-muted text-xs hover:text-chrono-danger transition-colors"
                  title="Remove"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Type Select */}
            <div className="relative">
              <select
                value={component.type}
                onChange={(event) =>
                  updateComponent(component.id, {
                    type: event.target.value as IncentiveComponent["type"],
                  })
                }
                className="w-full h-10 appearance-none rounded-lg border border-chrono-border-subtle bg-chrono-bg-card/60 px-3 pr-8 text-sm text-chrono-fg-primary focus:outline-none focus:ring-1 focus:ring-chrono-accent"
              >
                <option value="fixed">Fixed</option>
                <option value="percent">% of Total</option>
                <option value="remainder">Remainder</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-chrono-fg-muted">
                ▾
              </span>
            </div>

            {/* Amount / Auto-calculated */}
            {component.type === "remainder" ? (
              <div className="text-sm text-chrono-fg-muted">Auto-calculated</div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm text-chrono-fg-muted">
                  {component.type === "percent" ? "Percent" : "Amount"}
                </span>
                <input
                  type="number"
                  min={0}
                  value={component.value}
                  onChange={(event) =>
                    updateComponent(component.id, {
                      value: Number(event.target.value) || 0,
                    })
                  }
                  className="flex-1 bg-transparent text-sm font-medium text-chrono-fg-primary text-right focus:outline-none"
                  placeholder="0"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Reset Button */}
      <button
        type="button"
        onClick={onResetDefaults}
        className="text-xs text-chrono-fg-muted hover:text-chrono-accent transition-colors"
      >
        Reset to defaults
      </button>
    </section>
  );
}
