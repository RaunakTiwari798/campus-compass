import { motion } from "motion/react";
import { Sparkles, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const messages = [
  { role: "ai", text: "Hey! I'm Nova. What's your Class 12 percentage and JEE Mains percentile?" },
  { role: "user", text: "94% in 12th, JEE Mains 96.4 percentile" },
  { role: "ai", text: "Nice. Branch preference and budget?" },
  { role: "user", text: "CSE or AI, max 15L total fees, prefer Bangalore/Pune" },
  { role: "ai", text: "Got it. I have 4 strong matches — IIIT-B (94% match), PES (88%), BITS Goa (85%) and MIT Pune (82%). Want me to compare placements?" },
] as const;

export function AIChatPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">AI counselor</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Conversational. <span className="text-gradient">Not another form.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Nova asks about your marks, exam scores, budget, branch and lifestyle preferences — then
            ranks colleges by an AI compatibility score with realistic admission probability.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Class 10 & 12 marks + entrance scores",
              "Budget, city, hostel and interest areas",
              "Live AI scoring with admission probability",
              "Save favorites and track applications",
            ].map((t) => (
              <li key={t} className="flex gap-2 text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary mt-2" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/chat" className="inline-block mt-7">
            <Button className="bg-gradient-to-r from-primary to-accent text-background">Try the AI chat</Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-strong rounded-3xl p-4 md:p-6"
        >
          <div className="flex items-center gap-2 pb-3 border-b border-white/5">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
              <Sparkles className="size-4 text-background" />
            </div>
            <div>
              <div className="text-sm font-medium">Nova</div>
              <div className="text-xs text-muted-foreground">AI counselor · online</div>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`flex gap-2 ${m.role === "user" ? "justify-end" : ""}`}
              >
                {m.role === "ai" && (
                  <div className="size-7 shrink-0 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
                    <Sparkles className="size-3.5 text-background" />
                  </div>
                )}
                <div className={`max-w-[80%] text-sm rounded-2xl px-3.5 py-2.5 ${
                  m.role === "user"
                    ? "bg-gradient-to-br from-primary to-accent text-background rounded-br-sm"
                    : "glass rounded-bl-sm"
                }`}>
                  {m.text}
                </div>
                {m.role === "user" && (
                  <div className="size-7 shrink-0 rounded-lg bg-white/5 grid place-items-center">
                    <User className="size-3.5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}