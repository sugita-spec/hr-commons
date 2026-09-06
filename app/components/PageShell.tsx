import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageHero({ label, title, lead }: { label: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="eyebrow"><span /> {label}</div>
      <h1>{title}</h1>
      {lead && <p>{lead}</p>}
    </section>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main>
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}
