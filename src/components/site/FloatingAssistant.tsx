import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="mb-3 w-80 glass-strong rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-sm font-semibold">Nova · AI Counselor</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Tell me your marks & interests — I'll suggest colleges you'll actually love.
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="size-4" />
              </button>
            </div>
            <Link to="/chat" onClick={() => setOpen(false)}>
              <button className="mt-3 w-full rounded-xl bg-gradient-to-r from-primary to-accent text-background text-sm font-medium py-2 inline-flex items-center justify-center gap-1">
                Start AI chat <ArrowRight className="size-3.5" />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        className="size-14 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center shadow-xl glow-primary"
        aria-label="Open assistant"
      >
        <Sparkles className="size-6 text-background" />
      </motion.button>
    </div>
  );
}