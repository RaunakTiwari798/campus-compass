import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { AIChatPreview } from "@/components/site/AIChatPreview";
import { Features } from "@/components/site/Features";
import { CollegeCard } from "@/components/site/CollegeCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { colleges, futureColleges, reviews } from "@/lib/mock-data";
import { motion } from "motion/react";
import { Star, Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AIChatPreview />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Top recommendations"
          title={<>Colleges your AI <span className="text-gradient">picked for you</span></>}
          description="Sample matches from a typical CSE aspirant profile. Real recommendations are personalized."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {colleges.slice(0, 6).map((c, i) => (
            <CollegeCard key={c.id} college={c} index={i} />
          ))}
        </div>
      </section>

      <Features />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Future AI colleges"
          title={<>Emerging colleges <span className="text-gradient">built for the AI era</span></>}
          description="New-age institutions with AI-first curricula, industry partnerships and startup ecosystems."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {futureColleges.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="size-3 text-primary" /> {c.focus}
                </div>
                <div className="text-xs glass-strong rounded-full px-2 py-0.5 inline-flex items-center gap-1">
                  <TrendingUp className="size-3 text-primary" /> {c.growth}% growth
                </div>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.city}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.blurb}</p>
              <div className="grid grid-cols-3 gap-3 mt-5 text-xs">
                {[
                  { label: "Coding", val: c.coding },
                  { label: "Startup", val: c.startup },
                  { label: "Growth", val: c.growth },
                ].map((m) => (
                  <div key={m.label} className="glass rounded-lg p-3">
                    <div className="text-muted-foreground">{m.label}</div>
                    <div className="font-semibold text-base mt-0.5">{m.val}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.partners.map((p) => (
                  <span key={p} className="text-xs glass rounded-full px-2 py-0.5 text-muted-foreground">{p}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Community"
          title={<>Real reviews from <span className="text-gradient">verified students</span></>}
        />
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <img src={r.avatar} alt={r.student} className="size-10 rounded-full" />
                <div>
                  <div className="text-sm font-medium flex items-center gap-1">
                    {r.student}
                    {r.verified && (
                      <span className="text-[10px] bg-gradient-to-r from-primary to-accent text-background rounded-full px-1.5 py-0.5 font-semibold">VERIFIED</span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{r.college} · {r.branch}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="size-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground flex-1">{r.text}</p>
              <div className="text-xs text-muted-foreground mt-4">▲ {r.upvotes} upvotes</div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
