import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { futureColleges } from "@/lib/mock-data";
import { Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/future-colleges")({ component: FuturePage });

function FuturePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="text-center">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">Future AI colleges</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">The colleges <span className="text-gradient">building tomorrow.</span></h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">AI-curated insights on emerging institutions with strong industry partnerships and startup ecosystems.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {futureColleges.map((c) => (
            <div key={c.id} className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Sparkles className="size-3 text-primary" /> {c.focus}</div>
                <div className="text-xs glass-strong rounded-full px-2 py-0.5 inline-flex items-center gap-1"><TrendingUp className="size-3 text-primary" /> {c.growth}%</div>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.city}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.blurb}</p>
              <div className="grid grid-cols-3 gap-3 mt-5 text-xs">
                {[{ label: "Coding", val: c.coding }, { label: "Startup", val: c.startup }, { label: "Growth", val: c.growth }].map((m) => (
                  <div key={m.label} className="glass rounded-lg p-3">
                    <div className="text-muted-foreground">{m.label}</div>
                    <div className="font-semibold text-base mt-0.5">{m.val}</div>
                    <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden"><div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: `${m.val}%` }} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">{c.partners.map((p) => <span key={p} className="text-xs glass rounded-full px-2 py-0.5 text-muted-foreground">{p}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}