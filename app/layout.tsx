import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js SaaS Starter (Lite) — make1day.dev",
  description:
    "A minimal Next.js App Router starter. The full edition is generated to your exact picks with auth, billing, RAG and CI-verified builds.",
  openGraph: {
    title: "Next.js SaaS Starter (Lite)",
    description:
      "Minimal Next.js 15 + TypeScript + Tailwind starter. Upgrade path: make1day.dev generates the production edition.",
  },
  // Machine-readable outbound: agents and crawlers reading the head find
  // the product edge without parsing body copy.
  other: {
    generator: "Full edition + live demos: https://www.make1day.dev",
  },
  alternates: {
    types: {
      "text/markdown": "https://www.make1day.dev/llms.txt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
