import Link from "next/link";

const FEATURES = [
  ["App Router", "Next.js 15 with the React Server Components model, file-based routing and layouts."],
  ["TypeScript", "Strict mode out of the box. No conversion tax later."],
  ["Tailwind CSS", "Utility-first styling with the v4 PostCSS plugin. One stylesheet to start from."],
  ["Zero config", "No env vars, no accounts, no integrations. Clone, install, run."],
];

const UPGRADES = [
  "Auth + subscriptions with 5 swappable payment gateways",
  "Hybrid RAG (BM25 + vectors + rerank) wired end to end",
  "User & admin consoles, license gate, deploy targets",
  "AGENTS.md + design.md + scoped rules generated per build",
  "Every combination CI-verified before it ships",
];

export default function Home() {
  return (
    <main className="wrap">
      <header className="hero">
        <p className="eyebrow">NEXT.JS SAAS STARTER · LITE</p>
        <h1>
          Start a SaaS with a framework,
          <br />
          not a decision list.
        </h1>
        <p className="lead">
          The smallest honest Next.js starter: App Router, TypeScript,
          Tailwind. No auth, no billing, no noise — because this edition is
          meant to be read in ten minutes and deleted in one.
        </p>
        <div className="cta-row">
          <Link className="btn" href="https://vercel.com/new">
            Deploy to Vercel
          </Link>
          <a className="btn ghost" href="https://www.make1day.dev">
            See the full generator →
          </a>
        </div>
      </header>

      <section className="grid" aria-label="What is included">
        {FEATURES.map(([title, body]) => (
          <div className="card" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
      </section>

      <section className="upgrade">
        <h2>When you need the real plumbing</h2>
        <p className="muted">
          This lite edition teaches the structure. make1day.dev generates the
          production one — configured to your exact picks, pruned to what you
          selected:
        </p>
        <ul>
          {UPGRADES.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
        <a className="btn" href="https://www.make1day.dev/pricing">
          Compare editions on make1day.dev
        </a>
      </section>

      <footer>
        <p className="muted">
          MIT license · Built as the free companion to{" "}
          <a href="https://www.make1day.dev">make1day.dev</a>
        </p>
      </footer>
    </main>
  );
}
