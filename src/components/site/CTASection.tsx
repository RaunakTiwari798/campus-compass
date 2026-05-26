import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
        <div className="absolute -top-20 -left-20 size-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-accent/30 blur-3xl pointer-events-none" />
        <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight">
          Your next 4 years <span className="text-gradient">start with one question.</span>
        </h2>
        <p className="relative mt-4 text-muted-foreground max-w-xl mx-auto">
          Join 50,000+ students who picked their college with CampusAI instead of random WhatsApp groups.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/chat">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-background glow-primary">
              Start free chat <ArrowRight className="ml-1 size-4" />
            </Button>
          </Link>
          <Link to="/mentors">
            <Button size="lg" variant="outline" className="glass border-white/10">Book a mentor</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}