import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({ component: Pricing });

const tiers = [
  { name: "Free", price: "₹0", desc: "Everything to discover your college.", features: ["AI chat (10/day)", "Browse 2,400+ colleges", "Save 5 favorites", "Read reviews"], cta: "Get started" },
  { name: "Plus", price: "₹299", desc: "For serious applicants.", features: ["Unlimited AI chat", "Resume analyzer", "AI roadmap & scholarships", "Unlimited compare", "Priority alerts"], cta: "Go Plus", highlight: true },
  { name: "Mentor Pack", price: "₹1,499", desc: "Plus + 5 mentor sessions.", features: ["Everything in Plus", "5 × 30-min sessions", "Mock interviews", "Application review"], cta: "Choose pack" },
];

function Pricing() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Simple, <span className="text-gradient">student-friendly</span> pricing</h1>
          <p className="mt-3 text-muted-foreground">Cancel anytime. Free forever for core features.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-3xl p-7 flex flex-col ${t.highlight ? "glass-strong glow-primary" : "glass"}`}>
              <div className="text-sm text-muted-foreground">{t.name}</div>
              <div className="mt-2 text-4xl font-semibold tracking-tight">{t.price}<span className="text-base text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
              <ul className="mt-5 space-y-2 text-sm flex-1">
                {t.features.map((f) => <li key={f} className="flex gap-2"><Check className="size-4 text-primary mt-0.5" /> {f}</li>)}
              </ul>
              <Button className={`mt-6 ${t.highlight ? "bg-gradient-to-r from-primary to-accent text-background" : "glass border-white/10"}`} variant={t.highlight ? "default" : "outline"}>{t.cta}</Button>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}