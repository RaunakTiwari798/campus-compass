import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Brain, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          AI college discovery · now in public beta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Find the college that <br className="hidden md:block" />
          <span className="text-gradient">actually fits you.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground"
        >
          CampusAI talks to you like a senior, asks the right questions, and recommends colleges with
          real placements, fees, hostel info and an AI compatibility score — in seconds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link to="/chat">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-background hover:opacity-90 glow-primary">
              Talk to Nova AI <ArrowRight className="ml-1 size-4" />
            </Button>
          </Link>
          <Link to="/colleges">
            <Button size="lg" variant="outline" className="glass border-white/10 hover:bg-white/5">
              Explore colleges
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Brain, label: "AI matching", value: "98% accuracy" },
            { icon: GraduationCap, label: "Colleges indexed", value: "2,400+" },
            { icon: Sparkles, label: "Verified mentors", value: "1,200+" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-left">
              <s.icon className="size-5 text-primary mb-3" />
              <div className="text-2xl font-semibold tracking-tight">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}