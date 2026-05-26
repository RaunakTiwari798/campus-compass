import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { mentors } from "@/lib/mock-data";
import { Star, Calendar, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mentors")({ component: MentorsPage });

function MentorsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Mentor <span className="text-gradient">marketplace</span></h1>
          <p className="mt-3 text-muted-foreground">Book 1-on-1 sessions with verified seniors.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mentors.map((m) => (
            <div key={m.id} className="glass rounded-2xl p-5 flex flex-col">
              <img src={m.avatar} alt={m.name} className="size-16 rounded-2xl" />
              <h3 className="mt-3 font-semibold">{m.name}</h3>
              <div className="text-xs text-muted-foreground">{m.college} · {m.branch}</div>
              <div className="flex items-center gap-1 mt-2 text-xs"><Star className="size-3.5 fill-primary text-primary" /><span className="font-medium">{m.rating}</span><span className="text-muted-foreground">({m.reviews})</span></div>
              <div className="flex flex-wrap gap-1 mt-3">{m.tags.map((t) => <span key={t} className="text-[10px] glass rounded-full px-2 py-0.5 text-muted-foreground">{t}</span>)}</div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="size-3" /> {m.available}</span>
                <span className="font-semibold">₹{m.price}<span className="text-muted-foreground font-normal">/30m</span></span>
              </div>
              <Button className="mt-4 bg-gradient-to-r from-primary to-accent text-background"><Video className="size-4 mr-1" /> Book</Button>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}