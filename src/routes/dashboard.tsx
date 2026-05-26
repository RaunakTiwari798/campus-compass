import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { colleges } from "@/lib/mock-data";
import { Bookmark, BellRing, Trophy, Map } from "lucide-react";

export const Route = createFileRoute("/dashboard")({ component: Dash });

function Dash() {
  const stats = [
    { icon: Bookmark, label: "Saved colleges", value: 8 },
    { icon: BellRing, label: "Active alerts", value: 3 },
    { icon: Trophy, label: "Scholarships", value: 12 },
    { icon: Map, label: "Roadmap", value: "42%" },
  ];
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Welcome back, <span className="text-gradient">Aarav</span></h1>
            <p className="text-muted-foreground text-sm mt-1">3 application deadlines this week</p>
          </div>
          <button className="glass-strong rounded-xl px-4 py-2 text-sm">Sign out</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <s.icon className="size-5 text-primary" />
              <div className="text-2xl font-semibold mt-3">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-5 mt-8">
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="font-semibold">Saved colleges</div>
            <div className="mt-4 space-y-2">
              {colleges.slice(0, 4).map((c) => (
                <div key={c.id} className="flex items-center justify-between glass-strong rounded-xl p-3">
                  <div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.city} · ₹{c.package} LPA</div>
                  </div>
                  <div className="text-xs"><span className="text-gradient font-semibold">{c.match}%</span> match</div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="font-semibold">Application tracker</div>
            <div className="mt-4 space-y-3 text-sm">
              {[{ name: "JEE Advanced", date: "May 18", status: "Submitted" }, { name: "BITSAT Slot 2", date: "May 28", status: "Pending" }, { name: "VITEEE Form", date: "Jun 02", status: "Draft" }].map((a) => (
                <div key={a.name} className="flex justify-between items-center">
                  <div><div className="font-medium">{a.name}</div><div className="text-xs text-muted-foreground">{a.date}</div></div>
                  <span className="text-xs glass rounded-full px-2 py-0.5">{a.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}