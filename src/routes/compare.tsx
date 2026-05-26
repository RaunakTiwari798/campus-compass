import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { colleges } from "@/lib/mock-data";

export const Route = createFileRoute("/compare")({ component: ComparePage });

function ComparePage() {
  const [a, setA] = useState(colleges[0].id);
  const [b, setB] = useState(colleges[2].id);
  const A = colleges.find((c) => c.id === a)!;
  const B = colleges.find((c) => c.id === b)!;
  const rows = [
    { label: "Location", av: `${A.city}, ${A.state}`, bv: `${B.city}, ${B.state}` },
    { label: "Avg package", av: `₹${A.package} LPA`, bv: `₹${B.package} LPA` },
    { label: "Highest package", av: `₹${A.highest} LPA`, bv: `₹${B.highest} LPA` },
    { label: "Total fees", av: `₹${A.fees}L`, bv: `₹${B.fees}L` },
    { label: "Rating", av: A.rating, bv: B.rating },
    { label: "AI match", av: `${A.match}%`, bv: `${B.match}%` },
    { label: "Admission probability", av: `${A.probability}%`, bv: `${B.probability}%` },
  ];
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Compare <span className="text-gradient">colleges</span></h1>
          <p className="mt-3 text-muted-foreground">Side-by-side AI breakdown across the data points students care about.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {[{ v: a, set: setA }, { v: b, set: setB }].map((s, i) => (
            <select key={i} value={s.v} onChange={(e) => s.set(e.target.value)} className="glass-strong rounded-xl px-4 py-3 text-sm w-full">
              {colleges.map((c) => <option key={c.id} value={c.id} className="bg-background">{c.name}</option>)}
            </select>
          ))}
        </div>
        <div className="mt-6 glass-strong rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 px-5 py-4 border-b border-white/5 font-medium">
            <div className="text-muted-foreground text-sm">Metric</div>
            <div>{A.name}</div>
            <div>{B.name}</div>
          </div>
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-3 px-5 py-3 border-b border-white/5 text-sm last:border-0">
              <div className="text-muted-foreground">{r.label}</div>
              <div>{r.av}</div>
              <div>{r.bv}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}