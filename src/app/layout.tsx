import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incentive Calculator",
  description: "Interactive incentive calculator demo"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="h-screen overflow-hidden bg-chrono-bg-page text-foreground antialiased font-sans selection:bg-muted">
        {children}
      </body>
    </html>
  );
}
