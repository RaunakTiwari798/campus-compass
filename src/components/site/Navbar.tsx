import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/chat", label: "AI Chat" },
  { to: "/colleges", label: "Colleges" },
  { to: "/compare", label: "Compare" },
  { to: "/reviews", label: "Reviews" },
  { to: "/mentors", label: "Mentors" },
  { to: "/future-colleges", label: "Future AI" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <nav className="glass-strong rounded-2xl px-4 py-2.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center glow-primary">
              <Sparkles className="size-4 text-background" />
            </div>
            <span className="font-semibold tracking-tight text-lg">
              Campus<span className="text-gradient">AI</span>
            </span>
          </Link>
          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  activeProps={{ className: "text-foreground bg-white/5" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link to="/chat">
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-background hover:opacity-90">
                Get started
              </Button>
            </Link>
          </div>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/chat" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full mt-1 bg-gradient-to-r from-primary to-accent text-background">
                Get started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}