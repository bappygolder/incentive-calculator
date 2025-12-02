import React from "react";
import ReactDOM from "react-dom/client";
import "../../src/app/globals.css";
import { IncentiveCalculator } from "../../src/components/IncentiveCalculator";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="flex min-h-screen items-center justify-center bg-chrono-bg-page px-4 py-8">
      <IncentiveCalculator />
    </div>
  </React.StrictMode>
);
