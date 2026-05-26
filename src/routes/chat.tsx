import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Sparkles, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/chat")({ component: ChatPage });

type Msg = { role: "ai" | "user"; text: string };

const flow: { ask: string; key: string }[] = [
  { ask: "Hey 👋 I'm Nova, your AI college counselor. What's your name?", key: "name" },
  { ask: "Great to meet you! What was your Class 10 percentage?", key: "class10" },
  { ask: "And your Class 12 percentage (or expected)?", key: "class12" },
  { ask: "Which entrance exam(s) did you write? Share scores (e.g. JEE Mains 96.4 percentile, CUET 720)", key: "exams" },
  { ask: "Which branch are you leaning towards? (CSE / AI / ECE / Mechanical / Other)", key: "branch" },
  { ask: "What's your budget for total fees? (in lakhs)", key: "budget" },
  { ask: "Preferred city or state?", key: "city" },
  { ask: "Hostel required? (Yes / No / Either)", key: "hostel" },
  { ask: "Lastly — what excites you? (coding, research, startups, sports, music…)", key: "interest" },
];

function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([{ role: "ai", text: flow[0].ask }]);
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function send() {
    if (!input.trim()) return;
    const userMsg: Msg = { role: "user", text: input };
    const next = step + 1;
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      if (next < flow.length) {
        setMessages((m) => [...m, { role: "ai", text: flow[next].ask }]);
        setStep(next);
      } else {
        setMessages((m) => [
          ...m,
          {
            role: "ai",
            text: "Perfect — analyzing your profile against 2,400+ colleges with AI compatibility scoring…",
          },
        ]);
        setTimeout(() => setDone(true), 1200);
      }
    }, 500);
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="text-center">
          <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">AI counselor</div>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Chat with <span className="text-gradient">Nova</span>
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">Answer a few quick questions to get AI-curated college recommendations.</p>
        </div>

        <div className="mt-8 glass-strong rounded-3xl overflow-hidden">
          <div ref={scrollRef} className="h-[460px] overflow-y-auto p-5 space-y-3">
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
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
            </AnimatePresence>

            {done && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-strong rounded-2xl p-4 mt-2"
              >
                <div className="text-sm font-semibold">Top 3 matches</div>
                <div className="text-xs text-muted-foreground mt-1">Based on your profile</div>
                <div className="mt-3 space-y-2">
                  {[
                    { name: "IIIT Hyderabad", match: 94, prob: 18 },
                    { name: "BITS Pilani", match: 91, prob: 34 },
                    { name: "VIT Vellore", match: 88, prob: 72 },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between text-sm glass rounded-xl px-3 py-2">
                      <span>{c.name}</span>
                      <span className="text-xs text-muted-foreground">
                        <span className="text-gradient font-semibold">{c.match}%</span> match · {c.prob}% admit
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
          <div className="border-t border-white/5 p-3 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={done ? "Ask Nova anything…" : "Type your answer…"}
              className="bg-white/5 border-white/10"
            />
            <Button onClick={send} className="bg-gradient-to-r from-primary to-accent text-background">
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}