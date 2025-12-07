import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../../src/app/globals.css";
import { IncentiveCalculator } from "../../src/components/IncentiveCalculator";

function SpaApp() {
	const [total, setTotal] = useState<number>(8000);

	return (
		<div className="flex min-h-screen items-center justify-center bg-chrono-bg-page px-4 py-8">
			<IncentiveCalculator total={total} onTotalChange={setTotal} />
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SpaApp />
	</React.StrictMode>
);
