import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { reviews } from "@/lib/mock-data";
import { Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/reviews")({ component: ReviewsPage });

function ReviewsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Student <span className="text-gradient">reviews</span></h1>
          <p className="mt-3 text-muted-foreground">Unfiltered reviews from verified students.</p>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">{reviews.length} reviews</div>
          <Button className="bg-gradient-to-r from-primary to-accent text-background">+ Share experience</Button>
        </div>
        <div className="mt-6 space-y-4">
          {reviews.map((r) => (
            <div key={r.id} className="glass rounded-2xl p-6 flex gap-3">
              <img src={r.avatar} alt={r.student} className="size-11 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-medium">{r.student}</span>
                  {r.verified && <span className="text-[10px] bg-gradient-to-r from-primary to-accent text-background rounded-full px-1.5 py-0.5 font-semibold">VERIFIED</span>}
                </div>
                <div className="text-xs text-muted-foreground">{r.college} · {r.branch}</div>
                <div className="flex gap-0.5 mt-1">{Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="size-3.5 fill-primary text-primary" />)}</div>
                <p className="mt-3 text-sm">{r.text}</p>
                <button className="mt-3 glass rounded-full px-2.5 py-1 text-xs inline-flex items-center gap-1"><ThumbsUp className="size-3" /> {r.upvotes}</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}