import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CollegeCard } from "@/components/site/CollegeCard";
import { colleges } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Route = createFileRoute("/colleges")({ component: CollegesPage });

const branches = ["All", "CSE", "AI", "ECE", "Mech"];

function CollegesPage() {
  const [q, setQ] = useState("");
  const [branch, setBranch] = useState("All");
  const filtered = useMemo(
    () => colleges.filter((c) => {
      const mq = (c.name + c.city + c.state).toLowerCase().includes(q.toLowerCase());
      const mb = branch === "All" || c.branch.includes(branch);
      return mq && mb;
    }),
    [q, branch]
  );
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Explore <span className="text-gradient">colleges</span></h1>
          <p className="mt-3 text-muted-foreground">Filter by branch, search by name or city — every college scored by Nova AI.</p>
        </div>
        <div className="mt-8 glass-strong rounded-2xl p-3 flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search colleges, cities, states…" className="pl-9 bg-white/5 border-white/10" />
          </div>
          <div className="flex gap-1 flex-wrap">
            {branches.map((b) => (
              <button key={b} onClick={() => setBranch(b)} className={`text-xs px-3 py-2 rounded-lg transition-colors ${branch === b ? "bg-gradient-to-r from-primary to-accent text-background" : "glass hover:bg-white/10"}`}>{b}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c, i) => <CollegeCard key={c.id} college={c} index={i} />)}
          {filtered.length === 0 && <div className="col-span-full text-center text-muted-foreground py-12">No colleges found</div>}
        </div>
      </section>
    </SiteLayout>
  );
}